import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWaiverDto } from './dto/create-waiver.dto';

@Injectable()
export class WaiversService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {}

  async create(dto: CreateWaiverDto) {
    if (!dto.agreed) {
      throw new BadRequestException('서약서 확인 동의가 필요합니다.');
    }

    const waiver = await this.prisma.safetyWaiver.create({
      data: {
        name: dto.name,
        phone: dto.phone,
        emergencyContact: dto.emergencyContact,
        agreed: dto.agreed,
        signatureDataUrl: dto.signatureDataUrl,
      },
    });

    try {
      await this.sendEmail(waiver);
      return this.prisma.safetyWaiver.update({
        where: { id: waiver.id },
        data: { emailSent: true, emailError: null },
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : '이메일 전송 실패';

      return this.prisma.safetyWaiver.update({
        where: { id: waiver.id },
        data: { emailSent: false, emailError: message },
      });
    }
  }

  findAll() {
    return this.prisma.safetyWaiver.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  remove(id: number) {
    return this.prisma.safetyWaiver.delete({ where: { id } });
  }

  private async sendEmail(waiver: {
    id: number;
    name: string;
    phone: string;
    emergencyContact: string;
    agreed: boolean;
    signatureDataUrl: string;
    createdAt: Date;
  }) {
    const apiKey = this.config.get<string>('RESEND_API_KEY');
    const from = this.config.get<string>('WAIVER_FROM_EMAIL');
    const to = this.config.get<string>('WAIVER_TO_EMAIL') || 'mimifreediving@gmail.com';

    if (!apiKey || !from) {
      throw new Error('RESEND_API_KEY 또는 WAIVER_FROM_EMAIL이 설정되지 않았습니다.');
    }

    const resend = new Resend(apiKey);
    const submittedAt = waiver.createdAt.toLocaleString('ko-KR', {
      timeZone: 'Asia/Seoul',
    });

    await resend.emails.send({
      from,
      to,
      subject: `[미미다이브] 안전 교육 서약서 제출 - ${waiver.name}`,
      html: `
        <h2>안전 교육 서약서 제출</h2>
        <p><strong>이름:</strong> ${this.escapeHtml(waiver.name)}</p>
        <p><strong>휴대폰:</strong> ${this.escapeHtml(waiver.phone)}</p>
        <p><strong>비상연락망:</strong> ${this.escapeHtml(waiver.emergencyContact)}</p>
        <p><strong>서약 확인:</strong> ${waiver.agreed ? '동의' : '미동의'}</p>
        <p><strong>제출 시간:</strong> ${submittedAt}</p>
        <h3>서명</h3>
        <img src="${waiver.signatureDataUrl}" alt="서명" style="max-width: 360px; border: 1px solid #ddd; border-radius: 12px;" />
      `,
    });
  }

  private escapeHtml(value: string) {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

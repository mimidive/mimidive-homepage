import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNoticeDto, UpdateNoticeDto } from './dto/notice.dto';

@Injectable()
export class NoticesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.notice.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const notice = await this.prisma.notice.findUnique({ where: { id } });
    if (!notice) {
      throw new NotFoundException('공지사항을 찾을 수 없습니다.');
    }
    return notice;
  }

  create(dto: CreateNoticeDto) {
    return this.prisma.notice.create({ data: dto });
  }

  async update(id: number, dto: UpdateNoticeDto) {
    await this.findOne(id);
    return this.prisma.notice.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.notice.delete({ where: { id } });
  }
}

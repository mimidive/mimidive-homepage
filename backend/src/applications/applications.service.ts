import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateApplicationDto } from './dto/application.dto';

@Injectable()
export class ApplicationsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.application.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  create(dto: CreateApplicationDto) {
    return this.prisma.application.create({ data: dto });
  }

  remove(id: number) {
    return this.prisma.application.delete({ where: { id } });
  }
}

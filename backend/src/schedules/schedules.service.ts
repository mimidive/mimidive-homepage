import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateScheduleDto, UpdateScheduleDto } from './dto/schedule.dto';

@Injectable()
export class SchedulesService {
  constructor(private prisma: PrismaService) {}

  findAll(month?: string) {
    const where = month
      ? {
          date: {
            gte: new Date(`${month}-01`),
            lt: new Date(
              new Date(`${month}-01`).setMonth(
                new Date(`${month}-01`).getMonth() + 1,
              ),
            ),
          },
        }
      : undefined;

    return this.prisma.schedule.findMany({
      where,
      orderBy: { date: 'asc' },
    });
  }

  async findOne(id: number) {
    const schedule = await this.prisma.schedule.findUnique({ where: { id } });
    if (!schedule) {
      throw new NotFoundException('일정을 찾을 수 없습니다.');
    }
    return schedule;
  }

  create(dto: CreateScheduleDto) {
    return this.prisma.schedule.create({
      data: {
        ...dto,
        date: new Date(dto.date),
      },
    });
  }

  async update(id: number, dto: UpdateScheduleDto) {
    await this.findOne(id);
    return this.prisma.schedule.update({
      where: { id },
      data: {
        ...dto,
        date: dto.date ? new Date(dto.date) : undefined,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.schedule.delete({ where: { id } });
  }
}

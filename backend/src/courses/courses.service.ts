import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto, UpdateCourseDto } from './dto/course.dto';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  findAll(category?: string) {
    return this.prisma.course.findMany({
      where: category ? { category } : undefined,
      orderBy: { title: 'asc' },
    });
  }

  async findBySlug(slug: string) {
    const course = await this.prisma.course.findUnique({ where: { slug } });
    if (!course) {
      throw new NotFoundException('교육 과정을 찾을 수 없습니다.');
    }
    return course;
  }

  async findOne(id: number) {
    const course = await this.prisma.course.findUnique({ where: { id } });
    if (!course) {
      throw new NotFoundException('교육 과정을 찾을 수 없습니다.');
    }
    return course;
  }

  create(dto: CreateCourseDto) {
    return this.prisma.course.create({ data: dto });
  }

  async update(id: number, dto: UpdateCourseDto) {
    await this.findOne(id);
    return this.prisma.course.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.course.delete({ where: { id } });
  }
}

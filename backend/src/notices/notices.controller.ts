import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { NoticesService } from './notices.service';
import { CreateNoticeDto, UpdateNoticeDto } from './dto/notice.dto';
import { Public } from '../common/decorators/public.decorator';
import { Roles } from '../common/decorators/public.decorator';

@Controller('notices')
export class NoticesController {
  constructor(private noticesService: NoticesService) {}

  @Public()
  @Get()
  findAll() {
    return this.noticesService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.noticesService.findOne(id);
  }

  @Roles('ADMIN')
  @Post()
  create(@Body() dto: CreateNoticeDto) {
    return this.noticesService.create(dto);
  }

  @Roles('ADMIN')
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateNoticeDto,
  ) {
    return this.noticesService.update(id, dto);
  }

  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.noticesService.remove(id);
  }
}

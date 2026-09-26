import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Public, Roles } from '../common/decorators/public.decorator';
import { WaiversService } from './waivers.service';
import { CreateWaiverDto } from './dto/create-waiver.dto';

@Controller('waivers')
export class WaiversController {
  constructor(private waiversService: WaiversService) {}

  @Public()
  @Post()
  create(@Body() dto: CreateWaiverDto) {
    return this.waiversService.create(dto);
  }

  @Roles('ADMIN')
  @Get()
  findAll() {
    return this.waiversService.findAll();
  }

  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.waiversService.remove(id);
  }
}

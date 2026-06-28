import { Controller, Get, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { Roles } from '../common/decorators/public.decorator';

@Controller('applications')
export class ApplicationsController {
  constructor(private applicationsService: ApplicationsService) {}

  @Roles('ADMIN')
  @Get()
  findAll() {
    return this.applicationsService.findAll();
  }

  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.applicationsService.remove(id);
  }
}

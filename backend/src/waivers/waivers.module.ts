import { Module } from '@nestjs/common';
import { WaiversController } from './waivers.controller';
import { WaiversService } from './waivers.service';

@Module({
  controllers: [WaiversController],
  providers: [WaiversService],
})
export class WaiversModule {}

import { Module } from '@nestjs/common';
import { MobilesController } from './mobiles.controller';
import { MobilesService } from './mobiles.service';

@Module({
  controllers: [MobilesController],
  providers: [MobilesService],
  exports: [MobilesService],
})
export class MobilesModule {}

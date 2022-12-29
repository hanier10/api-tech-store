import { Module } from '@nestjs/common';
import { MobilesController } from './mobiles.controller';

@Module({
  controllers: [MobilesController],
})
export class MobilesModule {}

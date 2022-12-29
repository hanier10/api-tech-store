import { Module } from '@nestjs/common';
import { MobilesModule } from './mobiles/mobiles.module';

@Module({
  imports: [MobilesModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}

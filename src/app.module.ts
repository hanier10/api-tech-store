import { Module } from '@nestjs/common';
import { MobilesModule } from './mobiles/mobiles.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [MobilesModule, BrandsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}

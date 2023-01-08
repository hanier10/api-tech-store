import { Module } from '@nestjs/common';
import { MobilesModule } from './mobiles/mobiles.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [MobilesModule, BrandsModule, SeedModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}

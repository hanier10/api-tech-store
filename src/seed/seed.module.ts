import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { MobilesModule } from '../mobiles/mobiles.module';
import { BrandsModule } from 'src/brands/brands.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [MobilesModule, BrandsModule],
})
export class SeedModule {}

import { Injectable } from '@nestjs/common';
import { MobilesService } from '../mobiles/mobiles.service';

import { BRANDS_SEED } from './data/brands.seed';
import { MOBILES_SEED } from './data/mobiles.seed';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly mobilesService: MobilesService,
    private readonly brandsService: BrandsService,
  ) {}

  populateDB() {
    this.mobilesService.fillMobilesWithSeedData(MOBILES_SEED);
    this.brandsService.fillMobilesWithSeedData(BRANDS_SEED);
    return 'SEED executed successfully';
  }
}

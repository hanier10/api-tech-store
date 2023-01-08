import { Injectable } from '@nestjs/common';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  populateDB() {
    return 'SEED executed successfully';
  }
}

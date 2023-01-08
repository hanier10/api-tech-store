import { Mobile } from '../../mobiles/interfaces/mobile.interface';
import { v4 as uuid } from 'uuid';

export const MOBILES_SEED: Mobile[] = [
  {
    id: uuid(),
    brand: 'Xiaomi',
    model: 'Redmi',
  },
  {
    id: uuid(),
    brand: 'Samsung',
    model: 'A',
  },
];

import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Nokia',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Apple',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Huawei',
    createdAt: new Date().getTime(),
  },
];

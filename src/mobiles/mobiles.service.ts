import { Injectable } from '@nestjs/common';

@Injectable()
export class MobilesService {
  private mobiles = [
    {
      id: 1,
      brand: 'Xiaomi',
      model: 'Redmi',
    },
    {
      id: 2,
      brand: 'Samsung',
      model: 'A',
    },
    {
      id: 3,
      brand: 'Apple',
      model: '12 Pro Max',
    },
  ];

  findAll() {
    return this.mobiles;
  }

  findOneById(id: number) {
    const mobile = this.mobiles.find((mobile) => mobile.id === id);

    return mobile;
  }
}
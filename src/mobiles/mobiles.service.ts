import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Mobile } from './interfaces/mobile.interface';
import { CreateMobileDto } from './dto/create-mobile.dto';
import { UpdateMobileDto } from './dto/update-mobile.dto';

@Injectable()
export class MobilesService {
  private mobiles: Mobile[] = [
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
    {
      id: uuid(),
      brand: 'Apple',
      model: '12 Pro Max',
    },
  ];

  findAll() {
    return this.mobiles;
  }

  findOneById(id: string) {
    const mobile = this.mobiles.find((mobile) => mobile.id === id);
    if (!mobile) {
      throw new NotFoundException(`Mobile with id '${id}' no fue encontrado`);
    }
    return mobile;
  }

  create(CreateMobileDto: CreateMobileDto) {
    const mobile: Mobile = {
      id: uuid(),
      ...CreateMobileDto,
    };

    this.mobiles.push(mobile);

    return mobile;
  }

  update(id: string, updateMobileDto: UpdateMobileDto) {
    let mobileDB = this.findOneById(id);

    if (updateMobileDto.id && updateMobileDto.id !== id)
      throw new BadRequestException('Mobile id is not valid inside body');

    this.mobiles = this.mobiles.map((mobile) => {
      if (mobile.id === id) {
        mobileDB = {
          ...mobileDB,
          ...updateMobileDto,
          id,
        };
        return mobileDB;
      }

      return mobile;
    });

    return mobileDB;
  }
}

import { Controller, Get, Param } from '@nestjs/common';

@Controller('mobiles')
export class MobilesController {
  private phones = ['Xiaomi', 'Samsung', 'Apple'];
  @Get()
  getAllPhones() {
    return this.phones;
  }

  @Get('/:id')
  getPhonesById(@Param('id') id: string) {
    return this.phones[id];
  }
}

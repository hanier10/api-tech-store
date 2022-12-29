import { Controller, Get, Param } from '@nestjs/common';
import { MobilesService } from './mobiles.service';

@Controller('mobiles')
export class MobilesController {
  constructor(private readonly mobilesService: MobilesService) {}

  @Get()
  getAllPhones() {
    return this.mobilesService.findAll();
  }

  @Get('/:id')
  getPhonesById(@Param('id') id: string) {
    return this.mobilesService.findOneById(+id);
  }
}
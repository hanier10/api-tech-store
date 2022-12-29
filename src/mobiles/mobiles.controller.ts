import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { MobilesService } from './mobiles.service';

@Controller('mobiles')
export class MobilesController {
  constructor(private readonly mobilesService: MobilesService) {}

  @Get()
  getAllPhones() {
    return this.mobilesService.findAll();
  }

  @Get('/:id')
  getPhonesById(@Param('id', ParseIntPipe) id: number) {
    return this.mobilesService.findOneById(id);
  }

  @Post()
  createMobile(@Body() body: any) {
    return body;
  }

  @Patch('/:id')
  updateMobile(@Body() body: any) {
    return body;
  }

  @Delete('/:id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}

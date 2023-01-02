import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { MobilesService } from './mobiles.service';
import { CreateMobileDto } from './dto/create-mobile.dto';

@Controller('mobiles')
export class MobilesController {
  constructor(private readonly mobilesService: MobilesService) {}

  @Get()
  getAllPhones() {
    return this.mobilesService.findAll();
  }

  @Get('/:id')
  getPhonesById(
    @Param(
      'id',
      new ParseUUIDPipe({
        version: '5',
      }),
    )
    id: string,
  ) {
    return this.mobilesService.findOneById(id);
  }

  @Post()
  // @UsePipes(ValidationPipe)
  createMobile(@Body() createCardDto: CreateMobileDto) {
    return createCardDto;
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

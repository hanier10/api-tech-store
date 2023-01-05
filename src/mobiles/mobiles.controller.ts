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

import { CreateMobileDto, UpdateMobileDto } from './dto/index';

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
  createMobile(@Body() createMobileDto: CreateMobileDto) {
    return this.mobilesService.create(createMobileDto);
  }

  @Patch('/:id')
  updateMobile(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateMobileDto: UpdateMobileDto,
  ) {
    return this.mobilesService.update(id, updateMobileDto);
  }

  @Delete('/:id')
  deleteMobile(@Param('id', ParseUUIDPipe) id: string) {
    return this.mobilesService.delete(id);
  }
}

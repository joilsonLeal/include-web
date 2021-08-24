import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImmobileService } from './immobile.service';
import { CreateImmobileDto } from './dto/create-immobile.dto';
import { UpdateImmobileDto } from './dto/update-immobile.dto';

@Controller('immobile')
export class ImmobileController {
  constructor(private readonly immobileService: ImmobileService) {}

  @Post('tcheca')
  create(@Body() createImmobileDto: CreateImmobileDto) {
    try {
      return this.immobileService.create(createImmobileDto);
    } catch (error) {
      console.log('deu erro')
      return {
        message: error
      }
    }
  }

  @Get()
  findAll() {
    return this.immobileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.immobileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImmobileDto: UpdateImmobileDto) {
    return this.immobileService.update(+id, updateImmobileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.immobileService.remove(id);
  }
}

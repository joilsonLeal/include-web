import { Inject, Injectable } from '@nestjs/common';
import { notEqual } from 'assert/strict';
import { Immobile } from 'src/entities/immobile.entity';
import { Equal, MoreThan, Repository } from 'typeorm';
import { CreateImmobileDto } from './dto/create-immobile.dto';
import { UpdateImmobileDto } from './dto/update-immobile.dto';

@Injectable()
export class ImmobileService {
  constructor(
    @Inject('IMMOBILE_REPOSITORY') private immobileRepository: Repository<Immobile>,
  ) {}

  async create(createImmobileDto: CreateImmobileDto) {
    try {
      return  await this.immobileRepository.save({name: createImmobileDto.name});
    } catch (error) {
      return {message: error.message}
    }
  }

  async findAll() {
    return await this.immobileRepository.find();
  }

  async findOne(id: number) {
    return await this.immobileRepository.findOne(id);
  }

  update(id: number, updateImmobileDto: UpdateImmobileDto) {
    return `This action updates a #${id} immobile`;
  }

  async remove(id: string) {
    const tata = await this.immobileRepository.delete(id);
    if(!tata) console.log('sergio')
    return tata;
  }
}

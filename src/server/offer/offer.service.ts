import { Inject, Injectable } from '@nestjs/common';
import { Offer } from 'src/entities/offer.entity';
import { Repository } from 'typeorm';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';

@Injectable()
export class OfferService {
  constructor(
    @Inject('OFFER_REPOSITORY') private offerRepository: Repository<Offer>,
  ) {}

  create(createOfferDto: CreateOfferDto) {
    return 'this.offerRepository.save({})';
  }

  findAll() {
    return this.offerRepository.find({
      order: {created_at: 'DESC'},
      relations: ['immobile']
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} offer`;
  }

  update(id: number, updateOfferDto: UpdateOfferDto) {
    return `This action updates a #${id} offer`;
  }

  remove(id: number) {
    return `This action removes a #${id} offer`;
  }
}

import { Offer } from 'src/entities/offer.entity';
import { Connection } from 'typeorm';

export const offerProviders = [
  {
    provide: 'OFFER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Offer),
    inject: ['DATABASE_CONNECTION'],
  },
];

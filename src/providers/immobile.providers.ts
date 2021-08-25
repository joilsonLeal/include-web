import { Immobile } from 'src/entities/immobile.entity';
import { Connection } from 'typeorm';

export const immobileProviders = [
  {
    provide: 'IMMOBILE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Immobile),
    inject: ['DATABASE_CONNECTION'],
  },
];

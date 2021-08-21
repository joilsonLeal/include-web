import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'dabatase.ch3wvyxsnskq.us-east-1.rds.amazonaws.com',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'include-web',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        extra: {
          connectionLimit: 2,
        },
      }),
  },
];

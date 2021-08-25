import { Module } from '@nestjs/common';
import { ImmobileService } from './immobile.service';
import { ImmobileController } from './immobile.controller';
import { DatabaseModule } from 'src/database/database.module';
import { immobileProviders } from 'src/providers/immobile.providers';
@Module({
  imports: [DatabaseModule],
  controllers: [ImmobileController],
  providers: [...immobileProviders, ImmobileService]
})
export class ImmobileModule {}

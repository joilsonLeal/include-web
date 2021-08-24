import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './server/auth/auth.module';
import { AuthService } from './server/auth/auth.service';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './server/admin/admin.module';
import { AddressModule } from './server/address/address.module';
import { ImmobileModule } from './server/immobile/immobile.module';

@Module({
  imports: [ConfigModule.forRoot(), AdminModule, AuthModule, AddressModule, ImmobileModule],
  controllers: [AppController],
  providers: [AuthService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './backoffice/user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [UserModule, AuthModule, ProductModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}

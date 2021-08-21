import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { adminProviders } from 'src/providers/admin.providers';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports: [DatabaseModule],
  providers: [...adminProviders, AdminService],
  controllers: [AdminController],
  exports: [AdminService],
})
export class AdminModule {}

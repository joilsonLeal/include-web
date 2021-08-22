import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AdminRoles } from 'src/enums/AdminRoles';
import { Roles } from 'src/server/auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create.dto';

@Controller('admins')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get()
  async list() {
    return await this.adminService.findAll();
  }

  @Post()
  async create(@Body() data: CreateAdminDto) {
    return await this.adminService.create(data);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(AdminRoles.MASTER, AdminRoles.REAL_STATE_BROKER)
  @Get('protected')
  async protect(@Request() req) {
    return req.user;
  }
}

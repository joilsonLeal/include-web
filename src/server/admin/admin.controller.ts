import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create.dto';

@Controller('admins')
export class AdminController {
  constructor(private adminService: AdminService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async list() {
    return await this.adminService.findAll();
  }

  @Post()
  async create(@Body() data: CreateAdminDto) {
    return await this.adminService.create(data);
  }
}

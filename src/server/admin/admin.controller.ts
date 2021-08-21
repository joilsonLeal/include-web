import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminService } from './admin.service';

@Controller('admins')
export class AdminController {
  constructor(private adminService: AdminService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async list() {
    return await this.adminService.findAll();
  }

  @Post()
  async create(@Body() data: any) {
    console.log(data);
    return await this.adminService.create(data);
  }
}

import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
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

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  async protect(@Request() req) {
    return 'protected';
  }
}

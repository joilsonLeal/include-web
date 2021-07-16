import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { ResultDto } from 'src/dto/result.dto';
import { UserCreateDto } from './dto/user.create.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async list(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post()
  async create(@Body() data: UserCreateDto): Promise<ResultDto> {
    return await this.userService.create(data);
  }
}

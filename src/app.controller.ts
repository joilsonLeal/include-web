import { UseGuards } from '@nestjs/common';
import { Controller, Get, Post, Request } from '@nestjs/common';
import { AuthService } from './server/auth/auth.service';
import { JwtAuthGuard } from './server/auth/jwt-auth.guard';
import { LocalAuthGuard } from './server/auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(): string {
    return 'hello';
  }
}

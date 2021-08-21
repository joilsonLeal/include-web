import { Body } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { AuthService } from './server/auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: any) {
    return this.authService.login(user);
  }
}

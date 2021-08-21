import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from '../admin/admin.service';

@Injectable()
export class AuthService {
  constructor(
    private adminService: AdminService,
    private jwtService: JwtService,
  ) {}

  async login(data: any) {
    const user = await this.adminService.findByEmail(data.email);
    if (user && bcrypt.compareSync(data.password, user.password)) {
      const payload = { username: user.name, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    return new UnauthorizedException({
      message: 'E-mail or password incorrect',
    });
  }
}

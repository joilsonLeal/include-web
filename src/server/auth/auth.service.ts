import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from '../admin/admin.service';
import { AdminRoles } from 'src/enums/AdminRoles';

@Injectable()
export class AuthService {
  constructor(
    private adminService: AdminService,
    private jwtService: JwtService,
  ) {}

  async login(data: any) {
    const user = await this.adminService.findByEmail(data.email);
    if (user && bcrypt.compareSync(data.password, user.password)) {
      const payload = {
        name: user.name,
        id: user.id,
        email: user.email,
        role: AdminRoles[user.roles.toUpperCase()],
      };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    return new UnauthorizedException({
      message: 'E-mail or password incorrect',
    });
  }
}

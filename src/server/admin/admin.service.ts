import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Admin } from 'src/entities/admin.entity';
import { CreateAdminDto } from './dto/create.dto';
import { AdminRoles } from 'src/enums/AdminRoles';

@Injectable()
export class AdminService {
  constructor(
    @Inject('ADMIN_REPOSITORY') private adminRepository: Repository<Admin>,
  ) {}

  async findAll(): Promise<any> {
    const admins = await this.adminRepository.find();
    const result = admins.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
      };
    });
    return result;
  }

  async findByEmail(email: string): Promise<Admin | undefined> {
    return this.adminRepository.findOne({ email: email });
  }

  async create(dto: CreateAdminDto) {
    try {
      await this.adminRepository.save({
        email: dto.email,
        roles: AdminRoles.MASTER,
        password: bcrypt.hashSync(dto.password, 8),
        name: dto.name,
      });
      return {
        message: 'Admin cadastrado com sucesso.',
      };
    } catch (error) {
      return { message: 'Erro ao cadastrar admin.' };
    }
  }
}

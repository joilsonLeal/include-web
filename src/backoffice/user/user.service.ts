import { Inject, Injectable } from '@nestjs/common';
import { ResultDto } from 'src/dto/result.dto';
import { Repository } from 'typeorm';
import { UserCreateDto } from './dto/user.create.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<any> {
    const users = await this.userRepository.find();
    const result = users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
      };
    });
    return result;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ email: email });
  }

  async create(data: UserCreateDto): Promise<ResultDto> {
    const user = new User();
    user.email = data.email;
    user.password = bcrypt.hashSync(data.password, 8);
    user.name = data.name;
    try {
      await this.userRepository.save(user);
      return {
        status: true,
        message: 'Usuário cadastrado com sucesso.',
      };
    } catch (error) {
      return { status: false, message: 'Erro ao cadastrar usuário' };
    }
  }
}

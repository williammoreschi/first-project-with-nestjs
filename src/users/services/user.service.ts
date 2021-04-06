import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

import { generateHash } from '../../utils';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: MongoRepository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getById(id: string): Promise<User> {
    const connector = await this.userRepository.findOne(id);
    if (!connector) {
      throw new BadRequestException('Usuário não existe');
    }

    return connector;
  }

  async getByEmail(email: string) {
    return await this.userRepository.findOne({ email });
  }

  async create(user: User) {
    const userExist = await this.getByEmail(user.email);

    if (userExist) {
      throw new BadRequestException('Já existe um usuário com esse email');
    }

    const hashPassword = await generateHash(user.password);
    user.password = hashPassword;
    return await this.userRepository.save(new User(user));
  }
}

import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcryptjs';
import { User } from './user';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getAll() {
    return await this.userModel.find().exec();
  }

  async getById(id: string) {
    const connector = await this.userModel.findById(id).exec();
    if (!connector) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'usuário não existe',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return connector;
  }

  async getByEmail(email: string) {
    return await this.userModel.findOne({ email }).exec();
  }

  async create(user: User) {
    const userExist = await this.getByEmail(user.email);

    if (userExist) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Já existe um usuário com esse email',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await hash(user.password, 8);
    user.password = hashPassword;
    const createdConnector = new this.userModel(user);
    return await createdConnector.save();
  }
}

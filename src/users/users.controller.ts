import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserService } from './services/user.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return await this.userService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<User> {
    return await this.userService.getById(id);
  }

  @Post()
  async create(@Body() user: any): Promise<User> {
    return await this.userService.create(user);
  }
}

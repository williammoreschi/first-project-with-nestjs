import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserService } from './services/user.service';
import { UsersController } from './users.controller';
import * as ormconfig from '../../ormconfig';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forFeature([User]),
        TypeOrmModule.forRoot(ormconfig),
      ],
      controllers: [UsersController],
      providers: [UserService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  describe('create', () => {
    it('should be able to create a new connector', async () => {
      const user = <User>{
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: '147258369',
      };
      expect(await controller.create(user)).toHaveProperty('id');
    });
  });
});

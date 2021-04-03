import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { UserSchema } from './schemas/user.schema';
import { User } from './shared/user';
import { UserService } from './shared/user.service';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: '.env.test',
        }),
        MongooseModule.forRoot(
          `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.notof.mongodb.net/db?retryWrites=true&w=majority`,
        ),
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
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
      expect(await controller.create(user)).toHaveProperty('_id');
    });
  });
});

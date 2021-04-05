import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectorsController } from './connectors.controller';
import { Connector } from './entities/connector.entity';
import { ConnectorService } from './services/connector.service';

describe('ConnectorsController', () => {
  let controller: ConnectorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: '.env.test',
        }),
        TypeOrmModule.forFeature([Connector]),
        TypeOrmModule.forRoot({
          type: 'mongodb',
          url: process.env.MONGODB_CONNECTION_STRING,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          ssl: true,
          useUnifiedTopology: true,
          useNewUrlParser: true,
        }),
      ],
      controllers: [ConnectorsController],
      providers: [ConnectorService],
    }).compile();

    controller = module.get<ConnectorsController>(ConnectorsController);
  });

  describe('create', () => {
    it('should be able to create a new connector', async () => {
      const connector = <Connector>{
        name: 'Teste',
        type: 'REST',
        privacy: 'PUBLIC',
        baseUrl: '',
        logoUrl: '',
        category: 'Category',
        description: '',
        status: false,
      };
      expect(await controller.create(connector)).toHaveProperty('id');
    });
  });
});

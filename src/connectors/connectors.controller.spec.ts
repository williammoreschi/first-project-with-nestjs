import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ConnectorsController } from './connectors.controller';
import { ConnectorSchema } from './schemas/connector.schema';
import { Connector } from './shared/connector';
import { ConnectorService } from './shared/connector.service';

describe('ConnectorsController', () => {
  let controller: ConnectorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: '.env.test',
        }),
        MongooseModule.forRoot(
          `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.notof.mongodb.net/db?retryWrites=true&w=majority`,
        ),
        MongooseModule.forFeature([
          { name: 'Connector', schema: ConnectorSchema },
        ]),
      ],
      controllers: [ConnectorsController],
      providers: [ConnectorService],
    }).compile();

    controller = module.get<ConnectorsController>(ConnectorsController);
  });

  describe('create', () => {
    it('should be able to create a new connector', async () => {
      const connector = <Connector>{
        name: 'GooglE',
        type: '',
        privacy: '',
        baseUrl: '',
        logoUrl: '',
        category: '',
        description: '',
        status: false,
      };
      expect(await controller.create(connector)).toHaveProperty('_id');
    });
  });
});

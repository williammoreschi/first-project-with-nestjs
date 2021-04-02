import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ConnectorsController } from './connectors.controller';
import { ConnectorService } from './shared/connector.service';
import { ConnectorSchema } from './schemas/connector.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Connector', schema: ConnectorSchema }]),
  ],
  controllers: [ConnectorsController],
  providers: [ConnectorService],
})
export class ConnectorsModule {}

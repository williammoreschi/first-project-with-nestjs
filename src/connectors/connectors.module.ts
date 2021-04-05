import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectorService } from './services/connector.service';
import { ConnectorsController } from './connectors.controller';
import { Connector } from './entities/connector.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Connector])],
  controllers: [ConnectorsController],
  providers: [ConnectorService],
})
export class ConnectorsModule {}

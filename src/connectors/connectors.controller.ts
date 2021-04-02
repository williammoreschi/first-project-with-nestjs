import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Connector } from './shared/connector';
import { ConnectorService } from './shared/connector.service';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('connectors')
export class ConnectorsController {
  constructor(private connectorService: ConnectorService) {}

  @Get()
  async getAll(): Promise<Connector[]> {
    return await this.connectorService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Connector> {
    return await this.connectorService.getById(id);
  }

  @Post()
  async create(@Body() connector: Connector): Promise<Connector> {
    return await this.connectorService.create(connector);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() connector: Connector,
  ): Promise<Connector> {
    return await this.connectorService.update(id, connector);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.connectorService.delete(id);
  }
}

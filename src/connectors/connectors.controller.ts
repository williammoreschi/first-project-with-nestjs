import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ConnectorService } from './services/connector.service';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';
import { Connector } from './entities/connector.entity';

@UseGuards(JwtAuthGuard)
@Controller('connectors')
export class ConnectorsController {
  constructor(private connectorService: ConnectorService) {}

  @Get()
  async getAll(): Promise<Connector[]> {
    return await this.connectorService.getAll();
  }

  @Get('findByFilter')
  async findByFilter(@Query() query: Partial<Connector>) {
    return await this.connectorService.findByFilter(query);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Connector> {
    return await this.connectorService.getById(id);
  }

  @Post()
  @HttpCode(201)
  async create(@Body() connector: Partial<Connector>): Promise<Connector> {
    return await this.connectorService.create(connector);
  }

  @Put(':id')
  @HttpCode(204)
  async update(
    @Param('id') id: string,
    @Body() connector: Partial<Connector>,
  ): Promise<Connector> {
    return await this.connectorService.update(id, connector);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string): Promise<void> {
    await this.connectorService.delete(id);
  }
}

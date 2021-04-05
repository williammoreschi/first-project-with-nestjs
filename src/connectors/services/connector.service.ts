import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';

import { Connector } from '../entities/connector.entity';

@Injectable()
export class ConnectorService {
  constructor(
    @InjectRepository(Connector)
    private readonly connectorRepository: MongoRepository<Connector>,
  ) {}
  async getAll(): Promise<Connector[]> {
    return await this.connectorRepository.find();
  }

  async getById(id: string): Promise<Connector> {
    const connector = await this.connectorRepository.findOne(id);
    if (!connector) {
      throw new BadRequestException(`Conector não existe`);
    }

    return connector;
  }

  async create(connector: Partial<Connector>): Promise<Connector> {
    if (
      !connector ||
      !connector.name ||
      !connector.category ||
      !connector.privacy ||
      !connector.type
    ) {
      throw new BadRequestException(
        'Um conector deve ter pelo menos nome, categoria, tipo (REST, BD, SOAP) e Privacidade (PUBLIC ou PRIVATE)',
      );
    }
    return await this.connectorRepository.save(new Connector(connector));
  }

  async update(id: string, connector: Partial<Connector>): Promise<Connector> {
    const exists =
      ObjectID.isValid(id) && (await this.connectorRepository.findOne(id));
    if (!exists) {
      throw new NotFoundException();
    }
    await this.connectorRepository.update(id, connector);
    return this.getById(id);
  }

  async delete(id: string): Promise<void> {
    const exists =
      ObjectID.isValid(id) && (await this.connectorRepository.findOne(id));
    if (!exists) {
      throw new NotFoundException();
    }
    await this.connectorRepository.delete(id);
  }

}

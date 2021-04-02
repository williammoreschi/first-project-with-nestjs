import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Connector } from './connector';

@Injectable()
export class ConnectorService {
  constructor(
    @InjectModel('Connector') private readonly connectorModel: Model<Connector>,
  ) {}
  async getAll() {
    return await this.connectorModel.find().exec();
  }

  async getById(id: string) {
    const connector = await this.connectorModel.findById(id).exec();
    if (!connector) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Conector não existe',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return connector;
  }

  async create(connector: Connector) {
    const createdConnector = new this.connectorModel(connector);
    return await createdConnector.save();
  }

  async update(id: string, connector: Connector) {
    await this.connectorModel.updateOne({ _id: id }, connector).exec();
    return this.getById(id);
  }

  async delete(id: string) {
    await this.connectorModel.deleteOne({ _id: id }).exec();
  }
}

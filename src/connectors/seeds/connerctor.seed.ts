import { Factory, Seeder } from 'typeorm-seeding';

import { Connector } from '../entities/connector.entity';

export default class CreateConnector implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(Connector)('Google').create();
    await factory(Connector)('Facebook').create();
    await factory(Connector)('Wordpress').create();
    await factory(Connector)('Snapchat').create();
    await factory(Connector)('Twitter').create();
    await factory(Connector)('Instagram').create();
    await factory(Connector)('Whatsapp').create();
    await factory(Connector)('Rocketseat').create();
    await factory(Connector)('DevApi').create();
    await factory(Connector)('Netflix').create();
    await factory(Connector)('Amazon Prime').create();
    await factory(Connector)('Disney plus').create();
    await factory(Connector)('YouTube').create();
    await factory(Connector)('Trello').create();
    await factory(Connector)('Linkedin').create();
    await factory(Connector)('Github').create();
  }
}

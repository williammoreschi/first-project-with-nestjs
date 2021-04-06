import { define } from 'typeorm-seeding';

import { Connector } from '../entities/connector.entity';

define<Promise<Connector>, any>(Connector, async (_, name: string) => {
  const connector = new Connector();
  const x = Math.floor(Math.random() * 2);
  const y = Math.floor(Math.random() * 1);
  const typeArray = ['REST', 'BD', 'SOAP'];
  const privacyArray = ['PUBLIC', 'PRIVATE'];

  connector.name = name;
  connector.category = 'Category';
  connector.type = typeArray[x];
  connector.privacy = privacyArray[y];
  connector.status = y ? true : false;
  connector.description = 'Lorem Ipsum is simply dummy text of the printing';
  connector.baseUrl = null;
  connector.logoUrl = null;

  return connector;
});

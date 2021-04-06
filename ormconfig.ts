import { ConnectionOptions } from 'typeorm';
const config: ConnectionOptions = {
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'dev-api',
  useUnifiedTopology: true,
  entities: [__dirname + '/**/*.entity{ .ts,.js}'],
  synchronize: false,
  migrationsRun: true,
  logging: true,
};

export = config;

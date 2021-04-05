import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConnectorsModule } from './connectors/connectors.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGODB_CONNECTION_STRING,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    ConnectorsModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}

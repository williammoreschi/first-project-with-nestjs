import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConnectorsModule } from './connectors/connectors.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import * as ormconfig from '../ormconfig';
@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    ConnectorsModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { ConnectorsModule } from './connectors/connectors.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.notof.mongodb.net/db?retryWrites=true&w=majority`,
    ),
    ConnectorsModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}

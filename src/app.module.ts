import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormConfig from '../ormconfig'
import { UsersModule } from './users/users.module';
import { ChannelsModule } from './channels/channels.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    UsersModule,
    ChannelsModule,
    TagsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

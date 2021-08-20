import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsModule } from 'src/tags/tags.module';
import { ChannelsResolver } from './channels.resolver';
import { ChannelsService } from './channels.service';
import { ChannelRepository } from './entities/channel.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChannelRepository]),
    TagsModule,
  ],
  providers: [ChannelsService, ChannelsResolver]
})
export class ChannelsModule {}

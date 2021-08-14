import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/users/entities/user.repository';
import { GetChannelArgs } from './dto/args/get-channel.args';
import { CreateChannelInput } from './dto/inputs/create-channel.input';
import { UpdateChannelInput } from './dto/inputs/update-channel.input';
import { ChannelEntity } from './entities/channel.entity';
import { ChannelRepository } from './entities/channel.repository';

@Injectable()
export class ChannelsService {
    constructor (
        private channelRepository: ChannelRepository,
    ) {}

    public createChannel(createChannelData: CreateChannelInput): Promise<ChannelEntity> {
        return this.channelRepository.createChannel(createChannelData)
    }

   public async updateChannel(updateChannelData: UpdateChannelInput): Promise<ChannelEntity> {
       const channel = await this.channelRepository.findOne(updateChannelData.id)

       return await this.channelRepository.save({
           ...channel,
           ...updateChannelData
       })
   }

   public async getChannel(id: GetChannelArgs): Promise<ChannelEntity> {
       return await this.channelRepository.findOne(id)
   }
}

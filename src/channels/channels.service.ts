import { Injectable } from '@nestjs/common';
import { CreateChannelInput } from './dto/inputs/create-channel.input';
import { ChannelEntity } from './entities/channel.entity';
import { ChannelRepository } from './entities/channel.repository';

@Injectable()
export class ChannelsService {
    constructor (
        private channelRepository: ChannelRepository
    ) {}

    public createChannel(createChannelData: CreateChannelInput): Promise<ChannelEntity> {
        return this.channelRepository.createChannel(createChannelData)
    }
}

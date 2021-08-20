import { BadRequestException, Injectable } from '@nestjs/common';
import { TagsService } from 'src/tags/tags.service';
import { UserRepository } from 'src/users/entities/user.repository';
import { GetChannelArgs } from './dto/args/get-channel.args';
import { AddTagInput } from './dto/inputs/add-tag.input';
import { CreateChannelInput } from './dto/inputs/create-channel.input';
import { UpdateChannelInput } from './dto/inputs/update-channel.input';
import { ChannelEntity } from './entities/channel.entity';
import { ChannelRepository } from './entities/channel.repository';

@Injectable()
export class ChannelsService {
    constructor (
        private channelRepository: ChannelRepository,
        private tagsService: TagsService,
    ) {}

    public async findChannel(id: string): Promise<ChannelEntity> {
        return await this.channelRepository.findOne(id)
    }

    createChannel(createChannelData: CreateChannelInput): Promise<ChannelEntity> {
        return this.channelRepository.createChannel(createChannelData)
    }

    async updateChannel(updateChannelData: UpdateChannelInput): Promise<ChannelEntity> {
       const channel = await this.channelRepository.findOne(updateChannelData.id)

       if (!channel) {
           throw new BadRequestException(`Channel wasn't found`)
       }

       try {
            return await this.channelRepository.save({
                ...channel,
                ...updateChannelData
            })
       } catch (e) {
           throw new BadRequestException(`Error while saving a channel: ${e.message}`)
       }
   }

    async getChannel(id: GetChannelArgs): Promise<ChannelEntity> {
       return await this.channelRepository.findOne(id)
   }

    async addTag(addTagData: AddTagInput): Promise<ChannelEntity> {
        const channel = await this.findChannel(addTagData.channelId)
        const tag = await this.tagsService.findTag(addTagData.tagId)

        return await this.channelRepository.addTag(channel, tag)
   }
}

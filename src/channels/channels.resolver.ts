import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { ChannelsService } from "./channels.service";
import { ChannelDto } from "./dto/channel.dto";
import { CreateChannelInput } from "./dto/inputs/create-channel.input";
import { ChannelEntity } from "./entities/channel.entity";

@Resolver(() => ChannelDto)
export class ChannelsResolver {
    constructor (
        private readonly channelsService: ChannelsService
    ) {}

    @Mutation(() => ChannelDto)
    createChannel(@Args('createChannelData') createChannelData: CreateChannelInput): Promise<ChannelEntity> {
        return this.channelsService.createChannel(createChannelData)
    }
}
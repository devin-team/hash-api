import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ChannelsService } from "./channels.service";
import { GetChannelArgs } from "./dto/args/get-channel.args";
import { ChannelDto } from "./dto/channel.dto";
import { CreateChannelInput } from "./dto/inputs/create-channel.input";
import { UpdateChannelInput } from "./dto/inputs/update-channel.input";
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

    @Mutation(() => ChannelDto)
    updateChannel(@Args('updateChannelData') updateChannelData: UpdateChannelInput): Promise<ChannelEntity> {
        return this.channelsService.updateChannel(updateChannelData)
    }

    @Query(() => ChannelDto)
    getChannel(@Args() id: GetChannelArgs): Promise<ChannelEntity> {
        return this.channelsService.getChannel(id)
    }
}

import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNumber, IsOptional } from "class-validator"
import { ChannelDto } from "src/channels/dto/channel.dto";

@InputType()
export class SubscribeOnChannelInput {
    @Field()
    userId: string

    @Field()
    channelId: string
}

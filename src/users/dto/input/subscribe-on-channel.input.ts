import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class SubscribeOnChannelInput {
    @Field()
    userId: string

    @Field()
    channelId: string
}

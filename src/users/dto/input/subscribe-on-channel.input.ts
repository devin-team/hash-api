import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsUUID } from "class-validator";

@InputType()
export class SubscribeOnChannelInput {
    @Field()
    @IsNotEmpty()
    @IsUUID()
    userId: string

    @Field()
    @IsNotEmpty()
    @IsUUID()
    channelId: string
}

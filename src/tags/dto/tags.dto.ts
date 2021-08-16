import { Field, ObjectType } from "@nestjs/graphql";
import { ChannelDto } from "src/channels/dto/channel.dto";

@ObjectType()
export class TagDto {
    @Field({ nullable: true })
    id: string | null

    @Field({ nullable: true })
    name: string

    @Field({ nullable: true })
    description?: string

}
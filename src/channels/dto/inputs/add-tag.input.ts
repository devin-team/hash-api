import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsUUID } from "class-validator";

@InputType()
export class AddTagInput {
    @Field()
    @IsNotEmpty()
    @IsUUID()
    channelId: string

    @Field()
    @IsNotEmpty()
    @IsUUID()
    tagId: string
}
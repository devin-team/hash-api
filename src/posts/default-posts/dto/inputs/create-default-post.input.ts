import { Field, InputType } from "@nestjs/graphql";
import { IsUUID, IsNotEmpty } from "class-validator";

@InputType()
export class CreateDefaultPostInput {
    @Field({ nullable: true })
    media: string

    @Field({ nullable: true })
    description: string

    @Field()
    @IsNotEmpty()
    @IsUUID()
    author: string

    @Field(type => [String])
    tagsIds: string[] // TODO: Add max number of added tags checker
}

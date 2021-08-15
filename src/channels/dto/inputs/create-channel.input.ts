import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateChannelInput {
    @Field()
    @IsNotEmpty()
    @IsString()
    name: string

    @Field()
    @IsNotEmpty()
    @IsString()
    owner: string

    @Field({ nullable: true })
    @IsString()
    description?: string

    @Field({ nullable: true })
    @IsString()
    avatar?: string
}

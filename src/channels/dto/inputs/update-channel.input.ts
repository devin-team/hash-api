import { Field, InputType } from "@nestjs/graphql";
import { IsArray, IsNotEmpty, IsString, IsUUID } from "class-validator";

@InputType()
export class UpdateChannelInput {
    @Field()
    @IsNotEmpty()
    @IsUUID()
    id: string

    @Field({ nullable: true })
    @IsString()
    name?: string

    @Field({ nullable: true })
    @IsString()
    avatar?: string

    @Field(() => [String], { nullable: true })
    @IsArray()
    admins?: string[]

    @Field({ nullable: true })
    @IsString()
    description?: string
}

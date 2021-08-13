import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class UpdateChannelInput {
    @Field()
    @IsNotEmpty()
    id: string

    @Field({ nullable: true })
    name?: string

    @Field({ nullable: true })
    avatar?: string

    @Field(() => [String], { nullable: true })
    tags?: string[]

    @Field(() => [String], { nullable: true })
    admins?: string[]

    @Field({ nullable: true })
    description?: string
}

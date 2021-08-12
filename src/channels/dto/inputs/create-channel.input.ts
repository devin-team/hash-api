import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateChannelInput {
    @Field()
    name: string

    @Field()
    owner: string

    @Field({ nullable: true })
    description?: string

    @Field({ nullable: true })
    avatar?: string
}

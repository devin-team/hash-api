import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ChannelDto {
    @Field({ nullable: true })
    id: string

    @Field({ nullable: true })
    name?: string

    @Field({ nullable: true })
    avatar?: string

    @Field(() => [String], { nullable: true })
    tags?: string[]

    @Field({ nullable: true })
    owner?: string

    @Field(() => [String], { nullable: true })
    admins?: string[]

    @Field({ nullable: true })
    description?: string
    
    @Field(() => [String], { nullable: true })
    users?: string[]
}
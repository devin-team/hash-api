import { Field, ObjectType } from "@nestjs/graphql";
import { TagDto } from "src/tags/dto/tags.dto";
import { UserDto } from "src/users/dto/user.dto";

@ObjectType()
export class ChannelDto {
    @Field({ nullable: true })
    id: string

    @Field({ nullable: true })
    name?: string

    @Field({ nullable: true })
    avatar?: string

    @Field(() => [TagDto], { nullable: true })
    tags?: TagDto[]

    @Field({ nullable: true })
    owner?: string

    @Field(() => [String], { nullable: true })
    admins?: string[]

    @Field({ nullable: true })
    description?: string
    
    @Field(() => [UserDto])
    users: UserDto[]
}

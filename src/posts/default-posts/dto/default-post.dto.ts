import { Field, ObjectType } from "@nestjs/graphql";
import { TagDto } from "../../../tags/dto/tags.dto";
import { UserDto } from "../../../users/dto/user.dto";

@ObjectType()
export class DefaultPostDto {
    @Field({ nullable: true })
    id: string

    @Field({ nullable: true })
    media: string

    @Field({ nullable: true })
    description: string

    @Field(type => UserDto, { nullable: true })
    author: UserDto

    @Field({ nullable: true })
    publishedDate: Date

    @Field(type => [TagDto], { nullable: true })
    tags: TagDto[]
}

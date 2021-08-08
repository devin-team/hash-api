import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserDto {
    @Field()
    userId: string

    @Field()
    username: string

    @Field({ nullable: true })
    avatarLink?: string

    @Field()
    phoneNumber: string

    @Field({ nullable: true })
    email?: string

    @Field()
    password: string

    @Field({ nullable: true })
    age?: number

    @Field({ nullable: true })
    bio?: string

    @Field({ nullable: true})
    isAdmin?: boolean
}

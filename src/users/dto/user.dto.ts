import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserDto {
    @Field({ nullable: true })
    id: string | null

    @Field({ nullable: true })
    username: string

    @Field({ nullable: true })
    avatarLink?: string

    @Field({ nullable: true })
    phoneNumber: string

    @Field({ nullable: true })
    email?: string

    @Field({ nullable: true })
    password: string

    @Field({ nullable: true })
    age?: number

    @Field({ nullable: true })
    bio?: string

    @Field({ nullable: true})
    isAdmin?: boolean
}


@ObjectType()
export class ActionResultDto {
    @Field({ nullable: true })
    result: boolean
}
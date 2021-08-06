import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserEntity {
    @Field()
    userId: string;

    @Field()
    email: string;

    @Field()
    age: number;

    @Field({ nullable: true })
    isAdmin?: boolean;
}

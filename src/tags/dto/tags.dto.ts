import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class TagDto {
    @Field({ nullable: true })
    id: string | null

    @Field({ nullable: true })
    name: string

    @Field({ nullable: true })
    description?: string
}
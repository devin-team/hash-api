import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, } from "class-validator"

@InputType()
export class CreateTagInput {
    @Field()
    @IsNotEmpty()
    name: string

    @Field({nullable: true})
    @IsNotEmpty()
    description?: string
}

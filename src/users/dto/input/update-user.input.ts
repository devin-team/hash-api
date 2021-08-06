import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, IsNotEmpty } from "class-validator"

@InputType()
export class UpdateUserInput {
    @Field()
    @IsNotEmpty()
    userId: string

    @Field()
    @IsOptional()
    @IsNotEmpty()
    age?: number

    @Field({ nullable: true })
    @IsOptional()
    isAdmin?: boolean
}

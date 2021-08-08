import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNumber, IsOptional } from "class-validator"

@InputType()
export class CreateUserInput {
    @Field()
    username: string

    @Field()
    phoneNumber: string

    @Field()
    password: string

    @Field()
    @IsOptional()
    @IsEmail()
    email?: string

    @Field()
    @IsOptional()
    @IsNumber()
    age?: number
}

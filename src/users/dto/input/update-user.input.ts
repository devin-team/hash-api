import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, IsNotEmpty, IsEmail, IsString } from "class-validator"

@InputType()
export class UpdateUserInput {
    @Field()
    @IsNotEmpty()
    userId: string

    @Field()
    @IsOptional()
    @IsEmail()
    email?: string

    @Field()
    @IsOptional()
    @IsString()
    bio?: string

    @Field()
    @IsOptional()
    @IsNotEmpty()
    age?: number

    @Field({ nullable: true })
    @IsOptional()
    isAdmin?: boolean
}

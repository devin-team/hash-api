import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, IsNotEmpty, IsEmail, IsString } from "class-validator"

@InputType()
export class UpdateUserInput {
    @Field()
    @IsNotEmpty()
    id: string

    @Field({ nullable: true})
    @IsOptional()
    @IsEmail()
    email?: string

    @Field({ nullable: true})
    @IsOptional()
    @IsString()
    bio?: string

    @Field({ nullable: true})
    @IsOptional()
    @IsNotEmpty()
    age?: number

    @Field({ nullable: true })
    @IsOptional()
    isAdmin?: boolean
}

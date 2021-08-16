import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, IsNotEmpty, IsEmail, IsString, IsUUID } from "class-validator"

@InputType()
export class UpdateUserInput {
    @Field()
    @IsNotEmpty()
    @IsUUID()
    id: string

    @Field({ nullable: true})
    @IsOptional()
    @IsEmail()
    name: string

    @Field({ nullable: true})
    @IsOptional()
    description?: string



}

import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, IsNotEmpty, IsEmail, IsUUID } from "class-validator"

@InputType()
export class UpdateTagInput {
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

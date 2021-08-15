import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber } from "class-validator"
import { ChannelDto } from "src/channels/dto/channel.dto";

@InputType()
export class CreateUserInput {
    @Field()
    @IsNotEmpty()
    username: string

    @Field()
    @IsNotEmpty()
    @IsPhoneNumber()
    phoneNumber: string

    @Field()
    @IsNotEmpty()
    password: string

    @Field({ nullable: true })
    @IsOptional()
    @IsEmail()
    email?: string

    @Field({ nullable: true })
    @IsOptional()
    @IsNumber()
    age?: number
}

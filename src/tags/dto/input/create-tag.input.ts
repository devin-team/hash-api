import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber } from "class-validator"
import { ChannelDto } from "src/channels/dto/channel.dto";

@InputType()
export class CreateTagInput {
    @Field()
    @IsNotEmpty()
    name: string

    @Field({nullable: true})
    @IsNotEmpty()
    description?: string
}

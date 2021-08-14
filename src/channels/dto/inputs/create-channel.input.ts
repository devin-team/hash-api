import { Field, InputType } from "@nestjs/graphql";
import { UserDto } from "src/users/dto/user.dto";
import { UserEntity } from "src/users/entities/user.entity";

@InputType()
export class CreateChannelInput {
    @Field()
    name: string

    @Field()
    owner: string

    @Field({ nullable: true })
    description?: string

    @Field({ nullable: true })
    avatar?: string
}

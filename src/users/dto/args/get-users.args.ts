import { ArgsType, Field } from "@nestjs/graphql";
import { IsArray, IsUUID } from "class-validator";

@ArgsType()
export class GetUsersArgs {
    @Field(() => [String])
    @IsArray()
    @IsUUID('all', { each: true })
    userIds: string[]
}

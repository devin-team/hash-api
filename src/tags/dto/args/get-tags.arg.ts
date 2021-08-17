import { ArgsType, Field } from "@nestjs/graphql";
import { IsArray, IsUUID } from "class-validator";

@ArgsType()
export class GetTagsArgs {
    @Field(() => [String])
    @IsArray()
    @IsUUID('all', { each: true })
    tagsIds: string[]
}

import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsUUID } from "class-validator";

@ArgsType()
export class GetTagArgs {
    @Field()
    @IsNotEmpty()
    @IsUUID()
    tagId: string
}
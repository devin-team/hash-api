import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsUUID } from "class-validator";

@ArgsType()
export class GetChannelArgs {
    @Field()
    @IsNotEmpty()
    @IsUUID()
    id: string
}

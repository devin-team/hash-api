import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@ArgsType()
export class GetChannelArgs {
    @Field()
    @IsNotEmpty()
    id: string
}

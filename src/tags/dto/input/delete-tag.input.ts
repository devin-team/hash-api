import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsUUID } from 'class-validator'

@InputType()
export class DeleteTagInput {
    @Field()
    @IsNotEmpty()
    @IsUUID()
    id: string
}
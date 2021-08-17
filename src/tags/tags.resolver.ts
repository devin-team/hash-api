import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GetTagArgs } from "./dto/args/get-tag.arg";
import { CreateTagInput } from "./dto/input/create-tag.input";
import { TagDto } from "./dto/tags.dto";
import { TagsEntity } from "./tags.entity";
import { TagsService } from "./tags.service";

@Resolver(() => TagDto)
export class TagResolver {
     constructor(
        private tagsService: TagsService
     ){}

     // create
     @Mutation(() => TagDto)
     createTag(@Args('createtagData') createtagData: CreateTagInput): Promise<TagsEntity>{
         return this.tagsService.createTag(createtagData)
     }

    // find one
    @Query(() => TagDto, { name: 'getTag' })
    getTag(@Args() getTagArgs: GetTagArgs): Promise<TagsEntity> {
        return this.tagsService.getTag(getTagArgs)
    }
}

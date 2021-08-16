import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { create } from "domain";
import { CreateTagInput } from "./dto/input/create-tag.input";
import { TagDto } from "./dto/tags.dto";
import { TagRepository } from "./tag.repository";
import { TagsEntity } from "./tags.entity";
import { TagsService } from "./tags.service";

@Resolver(() => TagDto)   
export class TagResolver {
     constructor(
        private tagsService: TagsService
     ){}
     
     //create 
     @Mutation(() => TagDto)
     createTag(@Args('createtagData') createtagData: CreateTagInput): Promise<TagsEntity>{
         return this.tagsService.createTag(createtagData)
     }


}

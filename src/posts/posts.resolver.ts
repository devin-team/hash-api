import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { DefaultPostsService } from "./default-posts/default-posts.service";
import { DefaultPostDto } from "./default-posts/dto/default-post.dto";
import { CreateDefaultPostInput } from "./default-posts/dto/inputs/create-default-post.input";
import { DefaultPostEntity } from "./default-posts/entities/default-post.entity";

@Resolver()
export class PostsResolver {
    constructor (
        private defaultPostsService: DefaultPostsService
    ) {}

    @Mutation(() => DefaultPostDto)
    createDefaultPost(
        @Args('createDefaultPostData') createDefaultPostData: CreateDefaultPostInput
    ): Promise<DefaultPostEntity> {
        return this.defaultPostsService.createDefaultPost(createDefaultPostData)
    }
}

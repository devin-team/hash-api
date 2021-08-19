import { Module } from '@nestjs/common';
import { DefaultPostsModule } from './default-posts/default-posts.module';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
  imports: [
    DefaultPostsModule
  ],
  providers: [PostsService, PostsResolver]
})
export class PostsModule {}

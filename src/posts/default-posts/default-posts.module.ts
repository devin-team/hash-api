import { Module } from '@nestjs/common';
import { DeafaultPostsService } from './default-posts.service';

@Module({
  providers: [DeafaultPostsService]
})
export class DefaultPostsModule {}

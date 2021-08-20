import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsModule } from '../../tags/tags.module';
import { UsersModule } from '../../users/users.module';
import { DefaultPostsService } from './default-posts.service';
import { DefaultPostRepository } from './entities/default-post.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([DefaultPostRepository]),
    UsersModule,
    TagsModule,
  ],
  providers: [DefaultPostsService],
  exports: [DefaultPostsService]
})
export class DefaultPostsModule {}

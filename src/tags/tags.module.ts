import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagRepository } from './tag.repository';
import { TagResolver } from './tags.resolver';
import { TagsService } from './tags.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([TagRepository])
    ],
   providers: [TagsService, TagResolver]
})
export class TagsModule {}

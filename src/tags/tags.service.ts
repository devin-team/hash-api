import { Injectable } from '@nestjs/common';
import { GetTagArgs } from './dto/args/get-tag.arg';
import { CreateTagInput } from './dto/input/create-tag.input';
import { TagRepository } from './tag.repository';
import { TagsEntity } from './tags.entity';

@Injectable()
export class TagsService {
    constructor (
        private tagRepository: TagRepository
    ) {}

    getTag(getTagArgs: GetTagArgs): Promise<TagsEntity> {
        return this.tagRepository.findOne(getTagArgs.tagId)
    }

    createTag(createTagData: CreateTagInput) {
        return this.tagRepository.createTag(createTagData)
    }
}

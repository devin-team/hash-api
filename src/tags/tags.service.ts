import { Injectable } from '@nestjs/common';
import { CreateUserInput } from 'src/users/dto/input/create-user.input';
import { GetTagArgs } from './dto/args/get-tag.arg';
import { CreateTagInput } from './dto/input/create-tag.input';
import { TagRepository } from './tag.repository';
import { TagsEntity } from './tags.entity';

@Injectable()
export class TagsService {
    getTag(getTagArgs: GetTagArgs): Promise<TagsEntity> {
        return this.tagRepository.findOne(getTagArgs.tagId)
    }

    updateTag(updateChannelData: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    constructor (
        private tagRepository: TagRepository
    ) {}

    createTag(createTagData: CreateTagInput) {
        return this.tagRepository.createTag(createTagData)
    }
}

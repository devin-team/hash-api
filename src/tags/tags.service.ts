import { Injectable } from '@nestjs/common';
import { CreateUserInput } from 'src/users/dto/input/create-user.input';
import { CreateTagInput } from './dto/input/create-tag.input';
import { TagRepository } from './tag.repository';

@Injectable()
export class TagsService {
    constructor (
        private tagRepository: TagRepository
    ) {}

    createTag(createTagData: CreateTagInput) {
        return this.tagRepository.createTag(createTagData)
    }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { TagsEntity } from '../../tags/tags.entity';
import { TagsService } from '../../tags/tags.service';
import { UsersService } from '../../users/users.service';
import { CreateDefaultPostInput } from './dto/inputs/create-default-post.input';
import { DefaultPostEntity } from './entities/default-post.entity';
import { DefaultPostRepository } from './entities/default-post.repository';

@Injectable()
export class DefaultPostsService {
    constructor (
        private defaultPostRepository: DefaultPostRepository,
        private userService: UsersService,
        private tagsService: TagsService,
    ) {}
    
    async createDefaultPost(createDefaultPostData: CreateDefaultPostInput): Promise<DefaultPostEntity> {
        if (createDefaultPostData.media === undefined && createDefaultPostData.description === undefined) {
            throw new BadRequestException(`Provide media content or post text (description)`)
        }

        const author = await this.userService.getUser(createDefaultPostData.author)
        if (!author) {
            throw new BadRequestException(`User with provided ID wasn't found`)
        }

        let tags: TagsEntity[]
        for (const tagId of createDefaultPostData.tagsIds) {
            const tag = await this.tagsService.findTag(tagId)
            if (tag) {
                console.log(tag)
                tags.push(tag)
            } else {
                throw new BadRequestException(`Tag with provided ID (${tagId}) wasn't found`)
            }
        }

        const defaultPost = this.defaultPostRepository.create({ ...createDefaultPostData, author, publishedDate: new Date(), tags })
        await this.defaultPostRepository.save(defaultPost) // TODO: script doesn't push post ID to user's defaultPostIds

        return defaultPost
    }
}

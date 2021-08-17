import { EntityRepository, Repository } from "typeorm";
import { CreateTagInput } from "./dto/input/create-tag.input";
import { TagsEntity } from "./tags.entity";

@EntityRepository(TagsEntity)
export class TagRepository extends Repository<TagsEntity> {
    async createTag(createTagData: CreateTagInput): Promise<TagsEntity>{
        const tag = await this.create({...createTagData})
        this.save(tag)
        return tag
    }
}

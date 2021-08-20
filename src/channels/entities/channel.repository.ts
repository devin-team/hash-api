import { BadRequestException, InternalServerErrorException } from "@nestjs/common";
import { TagsEntity } from "src/tags/tags.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateChannelInput } from "../dto/inputs/create-channel.input";
import { ChannelEntity } from "./channel.entity";

@EntityRepository(ChannelEntity)
export class ChannelRepository extends Repository<ChannelEntity> {
    async createChannel(createChannelData: CreateChannelInput): Promise<ChannelEntity> {
        try {
            const channel = await this.create({ ...createChannelData }) // Создается запись в таблице
            this.save(channel) // Эта запись соъраняется
            return channel // Возвращаем запись конечному пользователю
        } catch (e) {
            throw new InternalServerErrorException(`Error while creating a channel: ${e.message}`)
        }
    }

    async addTag(channel: ChannelEntity, tag: TagsEntity): Promise<ChannelEntity> {
        const row = await this.findOne(channel.id, { relations: ['tags'] })

        const index = row.tags.indexOf(tag)
        if (index > -1) {
            throw new BadRequestException(`Tag is also added`)
        } else {
            row.tags.push(tag)
        }

        await this.save(row)

        return await this.findOne(channel.id, { relations: ['tags'] })
    }
}

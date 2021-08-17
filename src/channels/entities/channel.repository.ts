import { InternalServerErrorException } from "@nestjs/common";
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
}

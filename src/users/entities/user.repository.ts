import { BadRequestException, InternalServerErrorException, Logger } from "@nestjs/common";
import { ChannelEntity } from "src/channels/entities/channel.entity";
import { EntityRepository, Repository } from "typeorm";
import { SubscribeOnChannelInput } from "../dto/input/subscribe-on-channel.input";
import { UserDto } from "../dto/user.dto";
import { UserEntity } from "./user.entity";

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
    private logger = new Logger('UsersRepository')

    async createUser(createUserData: UserDto) {
        const {
            username,
            phoneNumber,
            password,
            email,
            age
        } = createUserData || null // create new variables with data from createUserData or null

        const user = await this.create({
            username,
            phoneNumber,
            password,
            email,
            age
        }) // typeorm provides several standard methods, like find, create, delete, and so on, more details in the documentation at https://typeorm.io/#/

        try {
            await this.save(user)
        } catch(e) {
            this.logger.log(`Error while creating a user: ${e.message}`)
            throw new InternalServerErrorException(`Error while creating a user: ${e.message}`)
        }
    }

    async subscibeUserOnChannel(user: UserEntity, channel: ChannelEntity): Promise<UserEntity> {
        const row = await this.findOne(user.id, { relations: ['channels'] })

        const index = row.channels.indexOf(channel) // get index of element in array
        if (index > -1) { // if element exists, index will be from 0 to ∞
            throw new BadRequestException(`The user is subscibed to the channel anyway`) // throw an error if the user is already subscribe
        } else {
            row.channels.push(channel)
        }

        await this.save(row)

        return await this.findOne(user.id, { relations: ['channels'] })
    }

    async unsubscibeUserFromChannel(user: UserEntity, channel: ChannelEntity): Promise<UserEntity> {
        const row = await this.findOne(user.id, { relations: ['channels'] })
        
        const index = row.channels.indexOf(channel) // get index of element in array
        if (index > -1) { // if element exists, index will be from 0 to ∞
            row.channels.splice(index, 1) // delete element by index
        } else {
            throw new BadRequestException(`The user isn't subscibed to the channel anyway`)
        }

        await this.save(row)

        return await this.findOne(user.id, { relations: ['channels'] })
    } 
}

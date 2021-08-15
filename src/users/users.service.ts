import { Injectable } from "@nestjs/common";
import { v4 as uuid } from 'uuid'
import { CreateUserInput } from "./dto/input/create-user.input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { DeleteUserInput } from "./dto/input/delete-user.input";
import { ActionResultDto, UserDto } from "./dto/user.dto";
import { UserRepository } from "./entities/user.repository";
import { UserEntity } from "./entities/user.entity";
import { SubscribeOnChannelInput } from "./dto/input/subscribe-on-channel.input";
import { ChannelRepository } from "src/channels/entities/channel.repository";
import { BadRequestException } from "@nestjs/common";
import { ChannelEntity } from "src/channels/entities/channel.entity";


// TODO: -sessions

@Injectable()
export class UsersService {
    constructor (
        private userRepository: UserRepository,
        private channelRepository: ChannelRepository
    ) {}


    public createUser(createUserData: CreateUserInput): UserDto {
        const user: UserDto = {
            id: uuid(),
            ...createUserData
        }

        try {
            this.userRepository.createUser(user)
            return user
        } catch (e) {
            return e
        }
    }

    public updateUser(updateUserData: UpdateUserInput): Promise<UserEntity> {
        const user = this.userRepository.findOne(updateUserData.id)
        return this.userRepository.save({
            ...user,
            ...updateUserData
        })
    }

    public getUser(id: string): Promise<UserEntity> {
        return this.userRepository.findOne(id)
    }

    public async getUsers(ids: string[]): Promise<UserEntity[]> {
        let users: UserEntity[] = [] // array of UserEntity objects
        for (const id of ids) { // for all elements of array
            const user = await this.getUser(id)
            if (user) { // if user is not null or undefined i.e. user exists
                users.push(user)
            }
        }
        return users
    }

    public async deleteUser(deleteUserData: DeleteUserInput): Promise<ActionResultDto> {
        const user = this.userRepository.findOne(deleteUserData.id)

        if (user) {
            await this.userRepository.delete(deleteUserData.id)
            let response = new ActionResultDto()
            response.result = true
            return response
        }
    }

    public async subscribeOnChannel(subscribeOnChannelData: SubscribeOnChannelInput): Promise<UserEntity> {
        let user: UserEntity
        let channel: ChannelEntity
        
        try {
            user = await this.userRepository.findOne(subscribeOnChannelData.userId)
            channel = await this.channelRepository.findOne(subscribeOnChannelData.channelId)
        } catch (e) {
            throw new BadRequestException(`${e.message}`)
        }

        if (!user || !channel) {
            throw new BadRequestException(`User/Channel wasn't found`)
        }

        return await this.userRepository.subscibeUserOnChannel(user, channel)
    }

    public async unsubscibeFromChannel(unsubscibeFromChannelData: SubscribeOnChannelInput): Promise<UserEntity> {
        let user: UserEntity
        let channel: ChannelEntity
        
        try {
            user = await this.userRepository.findOne(unsubscibeFromChannelData.userId)
            channel = await this.channelRepository.findOne(unsubscibeFromChannelData.channelId)
        } catch (e) {
            throw new BadRequestException(`${e.message}`)
        }

        if (!user || !channel) {
            throw new BadRequestException(`User/Channel wasn't found`)
        }

        return await this.userRepository.unsubscibeUserFromChannel(user, channel)
    }
}

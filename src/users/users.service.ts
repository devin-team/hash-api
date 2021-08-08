import { Injectable } from "@nestjs/common";
import { v4 as uuid } from 'uuid'
import { CreateUserInput } from "./dto/input/create-user.input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { GetUserArgs } from "./dto/args/get-user.args";
import { DeleteUserInput } from "./dto/input/delete-user.input";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { UserDto } from "./dto/user.dto";

@Injectable()
export class UsersService {
    private users: UserDto[] = []

    public createUser(createUserData: CreateUserInput): UserDto {
        const user: UserDto = {
            userId: uuid(),
            ...createUserData
        }

        this.users.push(user)

        return user
    }

    public updateUser(updateUserData: UpdateUserInput): UserDto {
        const user = this.users.find(user => user.userId === updateUserData.userId)

        Object.assign(user, updateUserData)

        return user
    }

    public getUser(getUserArgs: GetUserArgs): UserDto {
        return this.users.find(user => user.userId === getUserArgs.userId)
    }

    public getUsers(getUsersArgs: GetUsersArgs): UserDto[] {
        return getUsersArgs.userIds.map(userId => this.getUser({ userId }))
    }

    public deleteUser(deleteUserData: DeleteUserInput): UserDto {
        const userIndex = this.users.findIndex(user => user.userId === deleteUserData.userId)

        const user = this.users[userIndex]

        this.users.splice(userIndex)

        return user
    }
}

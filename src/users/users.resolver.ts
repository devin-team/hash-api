import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { CreateUserInput } from "./dto/input/create-user.input";
import { DeleteUserInput } from "./dto/input/delete-user.input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { ActionResultDto, UserDto } from "./dto/user.dto";
import { UserEntity } from "./entities/user.entity";
import { UsersService } from "./users.service";

@Resolver(() => UserDto)
export class UsersResolver {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Query(() => UserDto, { name: 'user', nullable: true })
    getUser(@Args('userId', { type: () => String }) id: string): Promise<UserEntity> {
        return this.usersService.getUser(id)
    }

    @Query(() => [UserDto], { name: 'users', nullable: 'items' })
    getUsers(@Args('userIds', { type: () => [String] }) ids: string[]): Promise<UserEntity[]> {
        return this.usersService.getUsers(ids)
    }

    @Mutation(() => UserDto)
    createUser(@Args('createUserData') createUserData: CreateUserInput): UserDto {
        return this.usersService.createUser(createUserData)
    }

    @Mutation(() => UserDto)
    updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): Promise<UserEntity> {
        return this.usersService.updateUser(updateUserData)
    }

    @Mutation(() => ActionResultDto)
    deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): Promise<ActionResultDto> {
        return this.usersService.deleteUser(deleteUserData)
    }
}

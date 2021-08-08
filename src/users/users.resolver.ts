import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { GetUserArgs } from "./dto/args/get-user.args";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { CreateUserInput } from "./dto/input/create-user.input";
import { DeleteUserInput } from "./dto/input/delete-user.input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { UserDto } from "./dto/user.dto";
import { UsersService } from "./users.service";

@Resolver(() => UserDto)
export class UsersResolver {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Query(() => UserDto, { name: 'user', nullable: true })
    getUser(@Args() getUserArgs: GetUserArgs): UserDto {
        return this.usersService.getUser(getUserArgs)
    }

    @Query(() => [UserDto], { name: 'users', nullable: 'items' })
    getUsers(@Args() getUsersArgs: GetUsersArgs): UserDto[] {
        return this.usersService.getUsers(getUsersArgs)
    }

    @Mutation(() => UserDto)
    createUser(@Args('createUserData') createUserData: CreateUserInput): UserDto {
        return this.usersService.createUser(createUserData)
    }

    @Mutation(() => UserDto)
    updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): UserDto {
        return this.usersService.updateUser(updateUserData)
    }

    @Mutation(() => UserDto)
    deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): UserDto {
        return this.usersService.deleteUser(deleteUserData)
    }
}

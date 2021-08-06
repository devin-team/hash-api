import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { GetUserArgs } from "./dto/args/get-user.args";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { CreateUserInput } from "./dto/input/create-user.input";
import { DeleteUserInput } from "./dto/input/delete-user.input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { UserEntity } from "./entities/user.entity";
import { UsersService } from "./users.service";

@Resolver(() => UserEntity)
export class UsersResolver {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Query(() => UserEntity, { name: 'user', nullable: true })
    getUser(@Args() getUserArgs: GetUserArgs): UserEntity {
        return this.usersService.getUser(getUserArgs)
    }

    @Query(() => [UserEntity], { name: 'users', nullable: 'items' })
    getUsers(@Args() getUsersArgs: GetUsersArgs): UserEntity[] {
        return this.usersService.getUsers(getUsersArgs)
    }

    @Mutation(() => UserEntity)
    createUser(@Args('createUserData') createUserData: CreateUserInput): UserEntity {
        return this.usersService.createUser(createUserData)
    }

    @Mutation(() => UserEntity)
    updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): UserEntity {
        return this.usersService.updateUser(updateUserData)
    }

    @Mutation(() => UserEntity)
    deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): UserEntity {
        return this.usersService.deleteUser(deleteUserData)
    }
}

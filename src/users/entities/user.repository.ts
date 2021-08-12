import { InternalServerErrorException, Logger } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
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
}

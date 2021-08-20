import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChannelRepository } from "src/channels/entities/channel.repository";
import { UserRepository } from "./entities/user.repository";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserRepository, ChannelRepository]),
    ],
    providers: [UsersResolver, UsersService],
    exports: [UsersService]
})
export class UsersModule {
}

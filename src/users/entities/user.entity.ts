import { ChannelEntity } from "src/channels/entities/channel.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true, nullable: false })
    username: string

    @Column({ nullable: true})
    avatarLink: string

    @Column({ unique: true, nullable: false })
    phoneNumber: string

    @Column({ nullable: true })
    email: string

    @Column({ nullable: false })
    password: string

    @Column({ nullable: true })
    age: number

    @Column({ nullable: true })
    bio: string

    @Column({ default: false})
    isAdmin: boolean

    @ManyToOne(() => ChannelEntity, channel => channel.users)
    @JoinColumn({ name: 'channel_id' })
    channel: ChannelEntity
}

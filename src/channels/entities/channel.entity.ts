import { UserEntity } from "src/users/entities/user.entity";
import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'channels' })
export class ChannelEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    name: string

    @Column({ nullable: true })
    avatar?: string

    @Column({ type: 'varchar', array: true, default: [] })
    tags?: string[]

    @Column()
    owner: string

    @Column({ type: 'varchar', array: true, default: [] })
    admins?: string[]

    @Column({ nullable: true })
    description?: string

    @ManyToMany(() => UserEntity, (users) => users.channels)
    users: UserEntity[]
}

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'channels' })
export class ChannelEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    name: string

    @Column({ nullable: true })
    avatar?: string

    @Column({ type: 'simple-array', nullable: true, array: true, default: [] })
    tags?: string[]

    @Column()
    owner: string

    @Column({ type: 'simple-array', nullable: true, array: true, default: [] })
    admins?: string[]

    @Column({ nullable: true })
    description?: string

    @Column({ type: 'simple-array', array: true, default: [] })
    users: string[]
}

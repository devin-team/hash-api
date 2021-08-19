import { ChannelEntity } from "src/channels/entities/channel.entity";
import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { DefaultPostEntity } from "../posts/default-posts/entities/default-post.entity";

@Entity({ name: 'tags' })
export class TagsEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column({ unique: true })
    name: string

    @Column({nullable: false})
    description?: string

    @ManyToMany(() => ChannelEntity, (channels) => channels.tags)
    channels: ChannelEntity[]

    @ManyToMany(() => DefaultPostEntity, defaultPosts => defaultPosts.tags)
    defaultPosts: DefaultPostEntity[]
}

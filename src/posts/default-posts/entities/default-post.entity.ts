import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TagsEntity } from "../../../tags/tags.entity";
import { UserEntity } from "../../../users/entities/user.entity";

@Entity({ name: 'default_posts' })
export class DefaultPostEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: true })
    media: string

    @Column({ nullable: true })
    description: string

    @OneToMany(() => UserEntity, author => author.defaultPosts)
    author: UserEntity

    @Column()
    publishedDate: Date

    @ManyToMany(() => TagsEntity, tags => tags.defaultPosts)
    @JoinTable()
    tags: TagsEntity[]
}

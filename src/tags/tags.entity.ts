import { ChannelEntity } from "src/channels/entities/channel.entity";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tags' })
export class TagsEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column({ unique: true })
    name: string

    @Column({nullable: false})
    description?: string
}

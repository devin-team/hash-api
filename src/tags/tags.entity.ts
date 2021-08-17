import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tags' })
export class TagsEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column({ unique: true })
    name: string

    @Column({nullable: false})
    description?: string
}

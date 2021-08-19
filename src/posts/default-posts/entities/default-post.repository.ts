import { EntityRepository, Repository } from "typeorm";
import { DefaultPostEntity } from "./default-post.entity";

@EntityRepository(DefaultPostEntity)
export class DefaultPostRepository extends Repository<DefaultPostEntity> {
    
}
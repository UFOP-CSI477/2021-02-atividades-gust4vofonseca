import { ICreateItemsDTO } from "@modules/dtos/ICreateItemsDTO";
import { Items } from "@modules/infra/typeorm/entities/Items";

export interface IItemsRepository {
    create(data: ICreateItemsDTO): Promise<void>;
    update(item: Items): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Items>;
    listAll(): Promise<Items[]>;
}
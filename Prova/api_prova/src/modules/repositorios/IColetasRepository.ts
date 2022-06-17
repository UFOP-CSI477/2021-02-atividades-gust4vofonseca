import { ICreateColetasDTO } from "@modules/dtos/ICreateColetasDTO";
import { Coletas } from "@modules/infra/typeorm/entities/Coletas";

export interface IColetasRepository {
    create(data: ICreateColetasDTO): Promise<void>;
    update(coleta: Coletas): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Coletas>;
    findByEntidade(entidade_id: string): Promise<Coletas[]>;
    findByItem(item_id: string): Promise<Coletas[]>;
    listAll(): Promise<Coletas[]>;
}
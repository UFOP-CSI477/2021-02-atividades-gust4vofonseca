import { ICreateEntidadesDTO } from "@modules/dtos/ICreateEntidadesDTO";
import { Entidades } from "@modules/infra/typeorm/entities/Entidades";

export interface IEntidadesRepository {
    create(data: ICreateEntidadesDTO): Promise<void>;
    update(entidade: Entidades): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Entidades>;
    listAll(): Promise<Entidades[]>;
}
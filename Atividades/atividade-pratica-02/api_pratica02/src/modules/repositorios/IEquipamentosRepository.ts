import { ICreateEquipamentosDTO } from "@modules/dtos/ICreateEquipamentosDTO";
import { Equipamentos } from "@modules/infra/typeorm/entities/Equipamentos";

export interface IEquipamentosRepository {
    create(data: ICreateEquipamentosDTO): Promise<void>;
    update(equipamentos: Equipamentos): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Equipamentos>;
    listAll(): Promise<Equipamentos[]>;
}
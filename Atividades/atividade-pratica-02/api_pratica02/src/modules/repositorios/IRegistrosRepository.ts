import { ICreateRegistrosDTO } from "@modules/dtos/ICreateRegistrosDTO";
import { Registros } from "@modules/infra/typeorm/entities/Registros";

export interface IRegistrosRepository {
    create(data: ICreateRegistrosDTO): Promise<void>;
    update(registros: Registros): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Registros>;
    listAll(): Promise<Registros[]>;
    findByEquipamentos(equipamento_id: string): Promise<Registros[]>;
    findByUsers(user_id: string): Promise<Registros[]>;
}
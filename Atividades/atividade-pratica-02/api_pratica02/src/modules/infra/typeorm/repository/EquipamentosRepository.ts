import { ICreateEquipamentosDTO } from "@modules/dtos/ICreateEquipamentosDTO";
import { IEquipamentosRepository } from "@modules/repositorios/IEquipamentosRepository";
import { getRepository, Repository } from "typeorm";
import { Equipamentos } from "../entities/Equipamentos";

class EquipamentosRepository implements IEquipamentosRepository {
    private repository: Repository<Equipamentos>;

    constructor() {
        this.repository = getRepository(Equipamentos);
    }

    create({nome}: ICreateEquipamentosDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(equipamentos: Equipamentos): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Equipamentos> {
        throw new Error("Method not implemented.");
    }
    listAll(): Promise<Equipamentos[]> {
        throw new Error("Method not implemented.");
    }

}

export { EquipamentosRepository };

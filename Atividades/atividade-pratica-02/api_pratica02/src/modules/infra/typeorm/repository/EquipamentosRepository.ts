import { ICreateEquipamentosDTO } from "@modules/dtos/ICreateEquipamentosDTO";
import { IEquipamentosRepository } from "@modules/repositorios/IEquipamentosRepository";
import { getRepository, Repository } from "typeorm";
import { Equipamentos } from "../entities/Equipamentos";

class EquipamentosRepository implements IEquipamentosRepository {
    private repository: Repository<Equipamentos>;

    constructor() {
        this.repository = getRepository(Equipamentos);
    }

    async create({nome}: ICreateEquipamentosDTO): Promise<void> {
        const equipamento = this.repository.create({
            nome
        })
 
        await this.repository.save(equipamento);
    }
    async update(equipamentos: Equipamentos): Promise<void> {
        await this.repository.save(equipamentos);
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
    async findById(id: string): Promise<Equipamentos> {
        const equipamento = await this.repository.findOne(id);

        return equipamento;
    }
    async listAll(): Promise<Equipamentos[]> {
        const equipamentos = await this.repository.find();

        return equipamentos
    }

}

export { EquipamentosRepository };

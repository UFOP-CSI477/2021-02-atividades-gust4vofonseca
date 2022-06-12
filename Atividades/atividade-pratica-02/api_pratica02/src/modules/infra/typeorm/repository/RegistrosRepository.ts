import { ICreateRegistrosDTO } from "@modules/dtos/ICreateRegistrosDTO";
import { IRegistrosRepository } from "@modules/repositorios/IRegistrosRepository";
import { Registros } from "../entities/Registros";
import { getRepository, Repository } from "typeorm";


class RegistrosRepository implements IRegistrosRepository {
    private repository: Repository<Registros>;

    constructor() {
        this.repository = getRepository(Registros);
    }
    async create({equipamento_id, user_id, descricao, dataLimite, tipo}: ICreateRegistrosDTO): Promise<void> {
        const registro = await this.repository.create({
            equipamento_id, user_id, descricao, dataLimite, tipo
        })

        await this.repository.save(registro);
    }
    async update(registros: Registros): Promise<void> {
        await this.repository.save(registros);
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
    async findById(id: string): Promise<Registros> {
        const registro = await this.repository.findOne(id);

        return registro;
    }
    async listAll(): Promise<Registros[]> {
        const registros = await this.repository.find();

        return registros;
    }

}

export { RegistrosRepository }
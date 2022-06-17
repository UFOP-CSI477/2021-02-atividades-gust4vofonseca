import { ICreateColetasDTO } from "@modules/dtos/ICreateColetasDTO";
import { IColetasRepository } from "@modules/repositorios/IColetasRepository";
import { getRepository, Repository } from "typeorm";
import { Coletas } from "../entities/Coletas";

export class ColetasRepository implements IColetasRepository {
    private repository: Repository<Coletas>;

    constructor() {
        this.repository = getRepository(Coletas);
    }
    
    async findByEntidade(entidade_id: string): Promise<Coletas[]> {
        const coletas = await this.repository.find({entidade_id});

        return coletas;
    }

    async findByItem(item_id: string): Promise<Coletas[]> {
        const coletas = await this.repository.find({item_id});

        return coletas;
    }

    async create({item_id, entidade_id, data, quantidade}: ICreateColetasDTO): Promise<void> {
        const coleta = this.repository.create({
            item_id,
            entidade_id,
            data,
            quantidade
        })

        await this.repository.save(coleta);
    }
    
    async update(coleta: Coletas): Promise<void> {
        await this.repository.save(coleta);
    }
    
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    async findById(id: string): Promise<Coletas> {
        const coleta = await this.repository.findOne(id);

        return coleta;
    }

    async listAll(): Promise<Coletas[]> {
        const coletas = await this.repository.find()

        return coletas;
    }
}
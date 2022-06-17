import { ICreateEntidadesDTO } from "@modules/dtos/ICreateEntidadesDTO";
import { IEntidadesRepository } from "@modules/repositorios/IEntidadesRepository";
import { getRepository, Repository } from "typeorm";
import { Entidades } from "../entities/Entidades";

export class EntidadesRepository implements IEntidadesRepository {
    private repository: Repository<Entidades>;

    constructor() {
        this.repository = getRepository(Entidades);
    }
    async create({name, bairro, cidade, estado}: ICreateEntidadesDTO): Promise<void> {
        const entidade = this.repository.create({
            name,
            bairro,
            cidade,
            estado
        })

        await this.repository.save(entidade);
    }

    async update(entidade: Entidades): Promise<void> {
        await this.repository.save(entidade);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    async findById(id: string): Promise<Entidades> {
        const entidade = await this.repository.findOne(id);

        return entidade;
    }

    async listAll(): Promise<Entidades[]> {
        const entidades = await this.repository.find();

        return entidades;
    }
}
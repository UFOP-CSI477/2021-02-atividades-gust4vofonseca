import { ICreateEntidadesDTO } from "@modules/dtos/ICreateEntidadesDTO";
import { Entidades } from "@modules/infra/typeorm/entities/Entidades";
import { IColetasRepository } from "@modules/repositorios/IColetasRepository";
import { IEntidadesRepository } from "@modules/repositorios/IEntidadesRepository";
import { IItemsRepository } from "@modules/repositorios/IItemsReposiotry";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListAllEntidadeUseCase {
    constructor (
        @inject("ColetasRepository")
        private coletasRepository: IColetasRepository,

        @inject("ItemsRepository")
        private itemsRepository: IItemsRepository,

        @inject("EntidadesRepository")
        private entidadesRepository: IEntidadesRepository,
    ) {}
    async execute(): Promise<Entidades[]> {
        const entidades = await this.entidadesRepository.listAll();

        return entidades;
    }
}
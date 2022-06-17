import { ICreateColetasDTO } from "@modules/dtos/ICreateColetasDTO";
import { Coletas } from "@modules/infra/typeorm/entities/Coletas";
import { IColetasRepository } from "@modules/repositorios/IColetasRepository";
import { IEntidadesRepository } from "@modules/repositorios/IEntidadesRepository";
import { IItemsRepository } from "@modules/repositorios/IItemsReposiotry";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListAllColetasUseCase {
    constructor (
        @inject("ColetasRepository")
        private coletasRepository: IColetasRepository,

        @inject("ItemsRepository")
        private itemsRepository: IItemsRepository,

        @inject("EntidadesRepository")
        private entidadesRepository: IEntidadesRepository,
    ) {}
    async execute(): Promise<Coletas[]>{
        const coletas = await this.coletasRepository.listAll();

        return coletas;
    }
}
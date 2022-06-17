import { ICreateItemsDTO } from "@modules/dtos/ICreateItemsDTO";
import { Items } from "@modules/infra/typeorm/entities/Items";
import { IColetasRepository } from "@modules/repositorios/IColetasRepository";
import { IEntidadesRepository } from "@modules/repositorios/IEntidadesRepository";
import { IItemsRepository } from "@modules/repositorios/IItemsReposiotry";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListAllItemUseCase {
    constructor (
        @inject("ColetasRepository")
        private coletasRepository: IColetasRepository,

        @inject("ItemsRepository")
        private itemsRepository: IItemsRepository,

        @inject("EntidadesRepository")
        private entidadesRepository: IEntidadesRepository,
    ) {}
    async execute(): Promise<Items[]> {
        const items = await this.itemsRepository.listAll()

        return items;
    }
}
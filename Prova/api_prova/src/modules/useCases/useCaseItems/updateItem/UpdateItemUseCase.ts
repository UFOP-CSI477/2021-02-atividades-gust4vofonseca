import { ICreateItemsDTO } from "@modules/dtos/ICreateItemsDTO";
import { IColetasRepository } from "@modules/repositorios/IColetasRepository";
import { IEntidadesRepository } from "@modules/repositorios/IEntidadesRepository";
import { IItemsRepository } from "@modules/repositorios/IItemsReposiotry";
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateItemUseCase {
    constructor (
        @inject("ColetasRepository")
        private coletasRepository: IColetasRepository,

        @inject("ItemsRepository")
        private itemsRepository: IItemsRepository,

        @inject("EntidadesRepository")
        private entidadesRepository: IEntidadesRepository,
    ) {}
    async execute({id, descricao}: ICreateItemsDTO): Promise<void> {
        const item = await this.itemsRepository.findById(id);

        item.descricao = descricao;

        await this.itemsRepository.update(item);
    }
}
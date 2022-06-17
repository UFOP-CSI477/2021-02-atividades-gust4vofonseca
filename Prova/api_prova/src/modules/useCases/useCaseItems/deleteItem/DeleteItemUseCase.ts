import { ICreateItemsDTO } from "@modules/dtos/ICreateItemsDTO";
import { IColetasRepository } from "@modules/repositorios/IColetasRepository";
import { IEntidadesRepository } from "@modules/repositorios/IEntidadesRepository";
import { IItemsRepository } from "@modules/repositorios/IItemsReposiotry";
import { inject, injectable } from "tsyringe";

@injectable()
export class DeleteItemUseCase {
    constructor (
        @inject("ColetasRepository")
        private coletasRepository: IColetasRepository,

        @inject("ItemsRepository")
        private itemsRepository: IItemsRepository,

        @inject("EntidadesRepository")
        private entidadesRepository: IEntidadesRepository,
    ) {}
    async execute(id: string): Promise<void> {
        const coletas = await this.coletasRepository.findByItem(id);

        for(const coleta of coletas) {
            await this.coletasRepository.delete(coleta.id);
        }

        await this.itemsRepository.delete(id);
    }
}
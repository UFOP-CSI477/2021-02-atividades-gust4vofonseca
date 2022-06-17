import { ICreateColetasDTO } from "@modules/dtos/ICreateColetasDTO";
import { IColetasRepository } from "@modules/repositorios/IColetasRepository";
import { IEntidadesRepository } from "@modules/repositorios/IEntidadesRepository";
import { IItemsRepository } from "@modules/repositorios/IItemsReposiotry";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateColetasUseCase {
    constructor (
        @inject("ColetasRepository")
        private coletasRepository: IColetasRepository,

        @inject("ItemsRepository")
        private itemsRepository: IItemsRepository,

        @inject("EntidadesRepository")
        private entidadesRepository: IEntidadesRepository,
    ) {}
    async execute({entidade_id, item_id, data, quantidade}: ICreateColetasDTO): Promise<void> {
        const entidade = await this.entidadesRepository.findById(entidade_id);

        if (!entidade) {
            return 
        }

        const item = await this.itemsRepository.findById(item_id);

        if (!item) {
            return
        }

        await this.coletasRepository.create({
            entidade_id,
            item_id,
            data,
            quantidade
        })

    }
}
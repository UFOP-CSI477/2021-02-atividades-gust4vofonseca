import { ICreateColetasDTO } from "@modules/dtos/ICreateColetasDTO";
import { IColetasRepository } from "@modules/repositorios/IColetasRepository";
import { IEntidadesRepository } from "@modules/repositorios/IEntidadesRepository";
import { IItemsRepository } from "@modules/repositorios/IItemsReposiotry";
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateColetasUseCase {
    constructor (
        @inject("ColetasRepository")
        private coletasRepository: IColetasRepository,

        @inject("ItemsRepository")
        private itemsRepository: IItemsRepository,

        @inject("EntidadesRepository")
        private entidadesRepository: IEntidadesRepository,
    ) {}
    async execute({id, entidade_id, item_id, data, quantidade}: ICreateColetasDTO) {
        const coleta = await this.coletasRepository.findById(id);

        if (!coleta) {
            return
        }

        if (entidade_id) {
            const entidade = await this.entidadesRepository.findById(entidade_id);

            if (!entidade) {
                return
            }

            coleta.entidade_id = entidade_id;
        }

        if (item_id) {
            const item = await this.itemsRepository.findById(item_id);

            if (!item) {
                return 
            }

            coleta.item_id = item_id;
        }

        if (data) {
            coleta.data = data;
        }

        if (quantidade) {
            coleta.quantidade;
        }

        await this.coletasRepository.update(coleta);
    }
}
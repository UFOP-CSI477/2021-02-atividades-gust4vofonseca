import { ICreateColetasDTO } from "@modules/dtos/ICreateColetasDTO";
import { Coletas } from "@modules/infra/typeorm/entities/Coletas";
import { IColetasRepository } from "@modules/repositorios/IColetasRepository";
import { IEntidadesRepository } from "@modules/repositorios/IEntidadesRepository";
import { IItemsRepository } from "@modules/repositorios/IItemsReposiotry";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindColetasUseCase {
    constructor (
        @inject("ColetasRepository")
        private coletasRepository: IColetasRepository,

        @inject("ItemsRepository")
        private itemsRepository: IItemsRepository,

        @inject("EntidadesRepository")
        private entidadesRepository: IEntidadesRepository,
    ) {}
    async execute(id: string): Promise<Coletas> {
        const coleta = await this.coletasRepository.findById(id);

        if(!coleta) {
            return
        }

        return coleta;
    }
}
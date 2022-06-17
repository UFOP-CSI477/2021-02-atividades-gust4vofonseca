import { ICreateEntidadesDTO } from "@modules/dtos/ICreateEntidadesDTO";
import { IColetasRepository } from "@modules/repositorios/IColetasRepository";
import { IEntidadesRepository } from "@modules/repositorios/IEntidadesRepository";
import { IItemsRepository } from "@modules/repositorios/IItemsReposiotry";
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateEntidadeUseCase {
    constructor (
        @inject("ColetasRepository")
        private coletasRepository: IColetasRepository,

        @inject("ItemsRepository")
        private itemsRepository: IItemsRepository,

        @inject("EntidadesRepository")
        private entidadesRepository: IEntidadesRepository,
    ) {}
    async execute({id, name, estado, bairro, cidade}: ICreateEntidadesDTO): Promise<void> {
        const entidade = await this.entidadesRepository.findById(id)
        
        if (!entidade) {
            return;
        }

        if (name) {
            entidade.name = name;
        }
        if (estado) {
            entidade.estado = estado;
        }
        if (bairro) {
            entidade.bairro = bairro;
        }
        if (cidade) {
            entidade.cidade = cidade;
        }

        await this.entidadesRepository.update(entidade);
    }
}
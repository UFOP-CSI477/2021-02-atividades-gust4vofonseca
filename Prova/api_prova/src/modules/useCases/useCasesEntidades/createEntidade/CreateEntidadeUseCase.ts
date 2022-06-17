import { ICreateEntidadesDTO } from "@modules/dtos/ICreateEntidadesDTO";
import { IColetasRepository } from "@modules/repositorios/IColetasRepository";
import { IEntidadesRepository } from "@modules/repositorios/IEntidadesRepository";
import { IItemsRepository } from "@modules/repositorios/IItemsReposiotry";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateEntidadeUseCase {
    constructor (
        @inject("ColetasRepository")
        private coletasRepository: IColetasRepository,

        @inject("ItemsRepository")
        private itemsRepository: IItemsRepository,

        @inject("EntidadesRepository")
        private entidadesRepository: IEntidadesRepository,
    ) {}
    async execute({name, estado, bairro, cidade}: ICreateEntidadesDTO): Promise<void> {
        await this.entidadesRepository.create({
            name, estado, bairro, cidade
        })
    }
}
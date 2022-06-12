import { Registros } from "@modules/infra/typeorm/entities/Registros";
import { IRegistrosRepository } from "@modules/repositorios/IRegistrosRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class ListAllRegistroUseCase {
    constructor (
        @inject("RegistrosRepository")
        private registrosRepository: IRegistrosRepository,
    ) {}

    async execute(): Promise<Registros[]> {
        const registros = await this.registrosRepository.listAll();

        return registros;
    }
}

export { ListAllRegistroUseCase };

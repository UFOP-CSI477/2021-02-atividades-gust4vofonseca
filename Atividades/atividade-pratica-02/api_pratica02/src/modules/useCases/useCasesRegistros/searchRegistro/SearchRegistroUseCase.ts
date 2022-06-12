import { Registros } from "@modules/infra/typeorm/entities/Registros";
import { IRegistrosRepository } from "@modules/repositorios/IRegistrosRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class SearchRegistroUseCase {
    constructor (
        @inject("RegistrosRepository")
        private registrosRepository: IRegistrosRepository,
    ) {}

    async execute(id: string): Promise<Registros> {
        const registro = await this.registrosRepository.findById(id);

        return registro;
    }
}

export { SearchRegistroUseCase };

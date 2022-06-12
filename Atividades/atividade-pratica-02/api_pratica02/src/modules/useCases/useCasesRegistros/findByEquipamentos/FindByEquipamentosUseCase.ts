import { Equipamentos } from "@modules/infra/typeorm/entities/Equipamentos";
import { Registros } from "@modules/infra/typeorm/entities/Registros";
import { IEquipamentosRepository } from "@modules/repositorios/IEquipamentosRepository";
import { IRegistrosRepository } from "@modules/repositorios/IRegistrosRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class FindByEquipamentosUseCase {
    constructor (
        @inject("RegistrosRepository")
        private registrosRepository: IRegistrosRepository,

        @inject("EquipamentosRepository")
        private equipamentosRepository: IEquipamentosRepository
    ) {}

    async execute(id: string): Promise<Registros[]> {
        const equipamento = await this.equipamentosRepository.findById(id);

        if (!equipamento) {
            return
        }

        const registros = await this.registrosRepository.findByEquipamentos(id);

        return registros;
    }
}

export { FindByEquipamentosUseCase };
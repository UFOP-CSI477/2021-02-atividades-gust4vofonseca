import { Equipamentos } from "@modules/infra/typeorm/entities/Equipamentos";
import { IEquipamentosRepository } from "@modules/repositorios/IEquipamentosRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class SearchEquipamentoUseCase {
    constructor (
        @inject("EquipamentosRepository")
        private equipamentosRepository: IEquipamentosRepository,
    ) {}

    async execute(id: string): Promise<Equipamentos> {
        const equipamento = await this.equipamentosRepository.findById(id);

        return equipamento;
    } 
}

export {SearchEquipamentoUseCase }
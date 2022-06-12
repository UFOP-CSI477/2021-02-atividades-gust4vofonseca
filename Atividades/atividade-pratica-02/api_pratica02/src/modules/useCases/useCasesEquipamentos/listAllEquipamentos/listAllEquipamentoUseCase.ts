import { Equipamentos } from "@modules/infra/typeorm/entities/Equipamentos";
import { IEquipamentosRepository } from "@modules/repositorios/IEquipamentosRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListAllEquipamentoUseCase {
    constructor (
        @inject("EquipamentosRepository")
        private equipamentosRepository: IEquipamentosRepository,
    ) {}

    async execute():Promise<Equipamentos[]> {
        const equipamentos = await this.equipamentosRepository.listAll();

        return equipamentos;
    }
}

export {ListAllEquipamentoUseCase }
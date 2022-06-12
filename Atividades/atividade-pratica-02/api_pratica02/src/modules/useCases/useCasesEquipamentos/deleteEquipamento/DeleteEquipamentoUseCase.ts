import { IEquipamentosRepository } from "@modules/repositorios/IEquipamentosRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteEquipamentoUseCase {
    constructor (
        @inject("EquipamentosRepository")
        private equipamentosRepository: IEquipamentosRepository,
    ) {}

    async execute(id: string): Promise<void> {
        await this.equipamentosRepository.delete(id);
    }
}

export {DeleteEquipamentoUseCase }
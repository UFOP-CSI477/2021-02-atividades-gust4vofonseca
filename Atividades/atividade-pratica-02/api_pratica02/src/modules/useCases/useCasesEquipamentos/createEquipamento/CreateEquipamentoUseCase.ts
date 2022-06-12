import { IEquipamentosRepository } from "@modules/repositorios/IEquipamentosRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateEquipamentoUseCase {
    constructor (
        @inject("EquipamentosRepository")
        private equipamentosRepository: IEquipamentosRepository,
    ) {}

    async execute(nome: string): Promise<void> {
        await this.equipamentosRepository.create({nome})
    }
}

export { CreateEquipamentoUseCase }
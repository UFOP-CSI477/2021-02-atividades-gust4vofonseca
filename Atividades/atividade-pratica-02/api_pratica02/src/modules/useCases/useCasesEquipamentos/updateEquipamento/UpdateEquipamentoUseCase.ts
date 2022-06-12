import { IEquipamentosRepository } from "@modules/repositorios/IEquipamentosRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateEquipamentoUseCase {
    constructor (
        @inject("EquipamentosRepository")
        private equipamentosRepository: IEquipamentosRepository,
    ) {}
    
    async execute(nome: string, id: string): Promise<void> {
        const equipamento = await this.equipamentosRepository.findById(id);

        equipamento.nome = nome;

        await this.equipamentosRepository.update(equipamento);
    }
}

export {UpdateEquipamentoUseCase }
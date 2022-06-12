import { IEquipamentosRepository } from "@modules/repositorios/IEquipamentosRepository";
import { IRegistrosRepository } from "@modules/repositorios/IRegistrosRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteEquipamentoUseCase {
    constructor (
        @inject("EquipamentosRepository")
        private equipamentosRepository: IEquipamentosRepository,

        @inject("RegistrosRepository")
        private registrosRepository: IRegistrosRepository
    ) {}

    async execute(id: string): Promise<void> {
        const registros = await this.registrosRepository.findByEquipamentos(id);

        for (const registro of registros ){
            await this.registrosRepository.delete(registro.id);
        }

        await this.equipamentosRepository.delete(id);
    }
}

export {DeleteEquipamentoUseCase }
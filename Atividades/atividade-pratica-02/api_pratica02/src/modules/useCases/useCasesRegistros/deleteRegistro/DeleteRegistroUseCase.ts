import { IEquipamentosRepository } from "@modules/repositorios/IEquipamentosRepository";
import { IRegistrosRepository } from "@modules/repositorios/IRegistrosRepository";
import { IUsersRepository } from "@modules/repositorios/IUsersRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class DeleteRegistroUseCase {
    constructor (
        @inject("RegistrosRepository")
        private registrosRepository: IRegistrosRepository,
    ) {}

    async execute(id: string): Promise<void> {
        const registro = await this.registrosRepository.findById(id);

        if (!registro) {
            return
        }

        await this.registrosRepository.delete(id);
        
    }
}

export { DeleteRegistroUseCase };

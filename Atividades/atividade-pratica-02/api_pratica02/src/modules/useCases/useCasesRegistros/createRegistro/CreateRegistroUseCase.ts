import { ICreateRegistrosDTO } from "@modules/dtos/ICreateRegistrosDTO";
import { IEquipamentosRepository } from "@modules/repositorios/IEquipamentosRepository";
import { IRegistrosRepository } from "@modules/repositorios/IRegistrosRepository";
import { IUsersRepository } from "@modules/repositorios/IUsersRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class CreateRegistroUseCase {
    constructor (
        @inject("RegistrosRepository")
        private registrosRepository: IRegistrosRepository,

        @inject("EquipamentosRepository")
        private equipamentosRepository: IEquipamentosRepository,

        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({
        equipamento_id,
        user_id,
        descricao,
        dataLimite,
        tipo
    }: ICreateRegistrosDTO): Promise<void> {
        const equipamento = await this.equipamentosRepository.findById(equipamento_id);

        if(!equipamento) {
            return;
        }

        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            return;
        }
        
        await this.registrosRepository.create({
            equipamento_id,
            user_id,
            descricao,
            dataLimite,
            tipo
        })
    }
}

export { CreateRegistroUseCase };

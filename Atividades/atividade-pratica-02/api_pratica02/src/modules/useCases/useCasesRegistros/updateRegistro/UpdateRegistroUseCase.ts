import { IEquipamentosRepository } from "@modules/repositorios/IEquipamentosRepository";
import { IRegistrosRepository } from "@modules/repositorios/IRegistrosRepository";
import { IUsersRepository } from "@modules/repositorios/IUsersRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id: string;
    equipamento_id?:string;
    user_id?:string;
    descricao?:string;
    dataLimite?: Date;
    tipo?:number;
}

@injectable()
class UpdateRegistroUseCase {
    constructor (
        @inject("RegistrosRepository")
        private registrosRepository: IRegistrosRepository,

        @inject("EquipamentosRepository")
        private equipamentosRepository: IEquipamentosRepository,

        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute(
    {   id,
        equipamento_id,
        user_id,
        descricao,
        dataLimite,
        tipo
    }: IRequest): Promise<void> {
        const registro = await this.registrosRepository.findById(id);

        if (!registro ) {
            return
        }

        if (equipamento_id) {
            const equipamento = await this.equipamentosRepository.findById(equipamento_id)

            if (!equipamento) {
                return
            }

            registro.equipamento_id = equipamento_id;
        }

        if (user_id) {
            const user = await this.usersRepository.findById(user_id);

            if (!user ) {
                return
            }

            registro.user_id = user_id;
        }

        if (descricao) {
            registro.descricao = descricao;
        }

        if (dataLimite) {
            registro.dataLimite = dataLimite
        }

        if (tipo) {
            registro.tipo = tipo;
        }

        await this.registrosRepository.update(registro);
    }
}

export { UpdateRegistroUseCase };

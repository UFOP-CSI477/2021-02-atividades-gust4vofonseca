import { IRegistrosRepository } from "@modules/repositorios/IRegistrosRepository";
import { IUsersRepository } from "@modules/repositorios/IUsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository,

        @inject("RegistrosRepository")
        private registrosRepository: IRegistrosRepository
    ) {}

    async execute(id: string): Promise<void> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            return
        }

        const registros = await this.registrosRepository.findByUsers(id);

        for (const registro of registros) {
            await this.registrosRepository.delete(registro.id);
        }

        await this.userRepository.delete(id);
    }
}

export { DeleteUserUseCase };

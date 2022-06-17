import { Users } from "@modules/infra/typeorm/entities/Users";
import { IUsersRepository } from "@modules/repositorios/IUsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class UserInformationUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ) {}

    async execute(id: string): Promise<Users> {
        const user = await this.usersRepository.findById(id);

        if (!user) {
            return
        }

        return user;
    }   
}

export { UserInformationUseCase }
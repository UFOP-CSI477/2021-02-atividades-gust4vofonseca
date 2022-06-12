import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "@modules/repositorios/IUsersRepository";
import { ICreateUsersDTO } from "@modules/dtos/ICreateUsersDTO";
import { hash } from "bcryptjs";


@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ) {}

    async execute({
        name, 
        email, 
        password
    }: ICreateUsersDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            return;
        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            name, email, password: passwordHash
        })
    }

}

export { CreateUserUseCase }
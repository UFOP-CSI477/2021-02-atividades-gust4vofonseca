import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
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
    }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            return
        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            name, email, password: passwordHash
        })
    }

}

export { CreateUserUseCase }
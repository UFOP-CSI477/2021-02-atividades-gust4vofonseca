import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { compare } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string,
        email: string
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ) {}

    async execute({email, password}: IRequest): Promise<IResponse> {

        const user = await this.usersRepository.findByEmail(email);

        if(!user) {
            return
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            return
        }

        const token = sign({}, '0af5d8a084b741846790efdeaa838dd2', {
            subject: user.id,
            expiresIn: "1d",
        })

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            }
        };

        return tokenReturn;

    }
}

export { AuthenticateUserUseCase };
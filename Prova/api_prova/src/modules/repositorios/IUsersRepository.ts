import { ICreateUsersDTO } from "@modules/dtos/ICreateUserDTO";
import { Users } from "@modules/infra/typeorm/entities/Users";

export interface IUsersRepository {
    create(data: ICreateUsersDTO): Promise<void>;
    update(user: Users): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Users>;
    findByEmail(email: string): Promise<Users>;
}
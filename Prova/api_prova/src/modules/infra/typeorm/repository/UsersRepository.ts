import { ICreateUsersDTO } from "@modules/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/repositorios/IUsersRepository";
import { getRepository, Repository } from "typeorm";
import { Users } from "../entities/Users";


class UsersRepository implements IUsersRepository {
    private repository: Repository<Users>;

    constructor() {
        this.repository = getRepository(Users);
    }

    async create({name, email, password}: ICreateUsersDTO): Promise<void> {
       const user = this.repository.create({
           name,
           email,
           password,
       })

       await this.repository.save(user);
    }
    async findByEmail(email: string): Promise<Users> {
        const user = await this.repository.findOne({email});

        return user;
    }
    async findById(id: string): Promise<Users> {
        const user = await this.repository.findOne(id);

        return user;
    }
    async update(user: Users): Promise<void> {
        await this.repository.save(user);
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}

export { UsersRepository }
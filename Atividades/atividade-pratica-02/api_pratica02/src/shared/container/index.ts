
import { UsersRepository } from "@modules/infra/typeorm/repository/UsersRepository";
import { IUsersRepository } from "@modules/repositorios/IUsersRepository";
import { container } from "tsyringe";

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);

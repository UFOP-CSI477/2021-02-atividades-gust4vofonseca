import { ColetasRepository } from "@modules/infra/typeorm/repository/ColetasRepository";
import { EntidadesRepository } from "@modules/infra/typeorm/repository/EntidadesRepository";
import { ItemsRepository } from "@modules/infra/typeorm/repository/ItemsRepository";
import { UsersRepository } from "@modules/infra/typeorm/repository/UsersRepository";
import { IColetasRepository } from "@modules/repositorios/IColetasRepository";
import { IEntidadesRepository } from "@modules/repositorios/IEntidadesRepository";
import { IItemsRepository } from "@modules/repositorios/IItemsReposiotry";
import { IUsersRepository } from "@modules/repositorios/IUsersRepository";
import { container } from "tsyringe";

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);
container.registerSingleton<IEntidadesRepository>("EntidadesRepository", EntidadesRepository);
container.registerSingleton<IItemsRepository>("ItemsRepository", ItemsRepository);
container.registerSingleton<IColetasRepository>("ColetasRepository", ColetasRepository);


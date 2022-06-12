
import { EquipamentosRepository } from "@modules/infra/typeorm/repository/EquipamentosRepository";
import { RegistrosRepository } from "@modules/infra/typeorm/repository/RegistrosRepository";
import { UsersRepository } from "@modules/infra/typeorm/repository/UsersRepository";
import { IEquipamentosRepository } from "@modules/repositorios/IEquipamentosRepository";
import { IRegistrosRepository } from "@modules/repositorios/IRegistrosRepository";
import { IUsersRepository } from "@modules/repositorios/IUsersRepository";
import { container } from "tsyringe";

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);

container.registerSingleton<IEquipamentosRepository>("EquipamentosRepository", EquipamentosRepository);

container.registerSingleton<IRegistrosRepository>("RegistrosRepository", RegistrosRepository);

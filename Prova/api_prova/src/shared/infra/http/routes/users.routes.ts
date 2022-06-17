import { Router } from  "express";

import { CreateUserController } from "@modules/useCases/useCasesUser/createUser/CreateUserController";
import { DeleteUserController } from "@modules/useCases/useCasesUser/deleteUser/DeleteUserController";
import { UpdateUserController } from "@modules/useCases/useCasesUser/updateUser/UpdateUserController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticated";
import { UserInformationController } from "@modules/useCases/useCasesUser/userInformation/UserInformationController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();
const userInformationController = new UserInformationController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.post("/delete", ensureAuthenticate, deleteUserController.handle)
usersRoutes.post("/update", ensureAuthenticate, updateUserController.handle)
usersRoutes.post("/info", ensureAuthenticate, userInformationController.handle)

export { usersRoutes };
import { Router } from "express";

import { AuthenticateUserController } from "@modules/useCases/useCasesUser/AutheticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);

export { authenticateRoutes };

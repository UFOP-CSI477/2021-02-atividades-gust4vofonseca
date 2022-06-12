import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { equipamentoRoutes } from "./equipamentos.routes";
import { registrosRoutes } from "./registros.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/equipamentos", equipamentoRoutes);
router.use("/registros", registrosRoutes);
router.use("/user", usersRoutes);
router.use(authenticateRoutes);

export { router };
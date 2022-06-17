import { Router } from "express";
import { allRoutes } from "./all.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use(allRoutes);
router.use("/user", usersRoutes);
router.use(authenticateRoutes);

export { router };
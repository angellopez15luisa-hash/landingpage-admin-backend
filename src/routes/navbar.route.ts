import { Router } from "express";
import { NavbarController } from "../controllers/navbar.controller";

const router = Router();

router.get("/get",[],NavbarController.get);

export default router;

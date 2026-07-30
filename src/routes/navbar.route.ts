import { Router } from "express";
import { NavbarController } from "../controllers/navbar.controller";
import { ValidateMiddleware } from "../middlewares";
import { NavbarMiddleware } from "../middlewares/navbar.middleware";
import { updateNavbarSchema } from "../schemas/navbar.schema";
 
const router = Router();

router.get("/get", NavbarController.get);

router.put(
  "/update/:id",
  updateNavbarSchema,
  ValidateMiddleware.validate,
  NavbarMiddleware.exists,
  NavbarController.update,
);

export default router;

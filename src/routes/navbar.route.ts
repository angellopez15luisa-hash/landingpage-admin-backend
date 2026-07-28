import { Router } from "express";
import { NavbarController } from "../controllers/navbar.controller";
import { ValidateMiddleware } from "../middlewares";
import { NavbarSchema } from "../schemas";
import multer from "multer";
import { NavbarMiddleware } from "../middlewares/navbar.middleware";

const router = Router();

router.get("/get", [], NavbarController.get);

router.put(
  "/update/:id",
  [
    ValidateMiddleware.validate(NavbarSchema.updateRouteSchema),
    NavbarMiddleware.exists,
  ],
  NavbarController.update,
);

export default router;

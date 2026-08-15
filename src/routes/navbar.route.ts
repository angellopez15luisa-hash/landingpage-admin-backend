import { Router } from "express";
import { NavbarController } from "../controllers/navbar.controller";
import { ValidateMiddleware } from "../middlewares";
import { NavbarMiddleware } from "../middlewares/navbar.middleware";
import { updateNavbarSchema } from "../schemas/navbar.schema";
import { validateSchema } from "../middlewares/validate.middleware";
import { NavbarSchema } from "../schemas";

const router = Router();

router.get("/get", NavbarController.get);

// router.put(
//   "/update/:id",
//   updateNavbarSchema,
//   ValidateMiddleware.validate,
//   NavbarMiddleware.notExists,
//   NavbarController.update,
// );

router.patch(
  "/update/:id",
  validateSchema(NavbarSchema.update),
  NavbarController.update,
);

export default router;

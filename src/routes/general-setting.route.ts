import { Router } from "express";
import { GeneralSettingController } from "../controllers";
import { validateSchema } from "../middlewares/validate.middleware";
import { GeneralSettingSchema } from "../schemas";
import { UserMiddleware } from "../middlewares";

const router = Router();

router.get("/public", GeneralSettingController.get);

router.use(UserMiddleware.verifyToken);

router.get("/", GeneralSettingController.get);

router.patch(
  "/:id",
  validateSchema(GeneralSettingSchema.update),
  GeneralSettingController.update,
);

export default router;

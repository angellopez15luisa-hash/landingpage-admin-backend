import { Router } from "express";
import { GeneralSettingController } from "../controllers";
import { validateSchema } from "../middlewares/validate.middleware";
import { GeneralSettingSchema } from "../schemas";
import { UserMiddleware } from "../middlewares";

const router = Router();

router.use(UserMiddleware.verifyToken);

router.get("/get", GeneralSettingController.get);

router.patch(
  "/update/:id",
  validateSchema(GeneralSettingSchema.update),
  GeneralSettingController.update,
);

export default router;

import { Router } from "express";
import { HeroSettingController } from "../controllers";
import { validateSchema } from "../middlewares/validate.middleware";
import { HeroSettingSchema } from "../schemas";

const router = Router();

router.get("/get", HeroSettingController.get);

router.patch(
  "/update/:id",
  validateSchema(HeroSettingSchema.update),
  HeroSettingController.update,
);

export default router;

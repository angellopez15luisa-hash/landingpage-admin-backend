import { Router } from "express";
import { HeroSectionController } from "../controllers";
import { updateHeroSectionSchema } from "../schemas/hero-section.schema";
import { HeroSectionMiddleware, ValidateMiddleware } from "../middlewares";

const router = Router();

router.get("/get-all", HeroSectionController.getAll);

router.put(
  "/update/:id",
  updateHeroSectionSchema,
  ValidateMiddleware.validate,
  HeroSectionMiddleware.exists,
  HeroSectionController.update,
);

export default router;

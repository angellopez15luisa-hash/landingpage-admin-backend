import { Router } from "express";
import { HeroSectionController } from "../controllers";
import { validateSchema } from "../middlewares/validate.middleware";
import { HeroSectionSchema } from "../schemas";
import { upload } from "../config/cloudinary.config";

const router = Router();

router.get("/get-all", HeroSectionController.getAll);

router.get(
  "/get-by-id/:id",
  validateSchema(HeroSectionSchema.getById),
  HeroSectionController.getById,
);

router.patch(
  "/update/:id",
  upload.single("imagePath"),
  validateSchema(HeroSectionSchema.update),
  HeroSectionController.update,
);

export default router;

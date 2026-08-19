import { Router } from "express";
import { HeroSectionController } from "../controllers";
import { validateSchema } from "../middlewares/validate.middleware";
import { HeroSectionSchema } from "../schemas";
import { upload } from "../config/cloudinary.config";
import { UserMiddleware } from "../middlewares";

const router = Router();

router.get("/public", HeroSectionController.getAll);

router.use(UserMiddleware.verifyToken);

router.get("/", HeroSectionController.getAll);

router.get(
  "/:id",
  validateSchema(HeroSectionSchema.getById),
  HeroSectionController.getById,
);

router.patch(
  "/:id",
  upload.single("imagePath"),
  validateSchema(HeroSectionSchema.update),
  HeroSectionController.update,
);

export default router;

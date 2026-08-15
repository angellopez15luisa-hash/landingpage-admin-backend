import { Router } from "express";
import { FooterSectionController } from "../controllers";
import { validateSchema } from "../middlewares/validate.middleware";
import { FooterSectionSchema } from "../schemas";

const router = Router();

router.get("/get", FooterSectionController.get);

router.patch(
  "/update/:id",
  validateSchema(FooterSectionSchema.update),
  FooterSectionController.update,
);

export default router;

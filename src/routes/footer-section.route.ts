import { Router } from "express";
import { FooterSectionController } from "../controllers";
import { updateFooterSectionSchema } from "../schemas/footer-section.schema";
import { FooterSectionMiddleware, ValidateMiddleware } from "../middlewares";

const router = Router();

router.get("/get", FooterSectionController.get);

router.put(
  "/update/:id",
  updateFooterSectionSchema,
  ValidateMiddleware.validate,
  FooterSectionMiddleware.notExists,
  FooterSectionController.update,
);

export default router;

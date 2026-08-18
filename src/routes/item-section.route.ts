import { Router } from "express";
import { updateItemSectionSchema } from "../schemas/item-section.schema";
import { ValidateMiddleware } from "../middlewares";
import { ItemSectionController } from "../controllers/item-section.controller";
import { ItemSectionMiddleware } from "../middlewares/item-section.middleware";
import { validateSchema } from "../middlewares/validate.middleware";
import { ItemSectionSchema } from "../schemas";
import z from "zod";

const router = Router();

router.get("/", ItemSectionController.getAll);

router.get(
  "/:id",
  validateSchema(ItemSectionSchema.getById),
  ItemSectionController.getById,
);

router.patch(
  "/:id",
  validateSchema(ItemSectionSchema.update),
  ItemSectionController.update,
);

export default router;

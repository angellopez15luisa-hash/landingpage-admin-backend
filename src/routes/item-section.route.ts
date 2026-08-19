import { Router } from "express";
import { updateItemSectionSchema } from "../schemas/item-section.schema";
import { UserMiddleware, ValidateMiddleware } from "../middlewares";
import { ItemSectionController } from "../controllers/item-section.controller";
import { ItemSectionMiddleware } from "../middlewares/item-section.middleware";
import { validateSchema } from "../middlewares/validate.middleware";
import { ItemSectionSchema } from "../schemas";
import z from "zod";

const router = Router();

router.get("/public", ItemSectionController.getAll);

router.use(UserMiddleware.verifyToken);

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

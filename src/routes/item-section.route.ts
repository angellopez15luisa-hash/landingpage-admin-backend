import { Router } from "express";
import multer from "multer";
import { updateItemSectionSchema } from "../schemas/item-section.schema";
import { ValidateMiddleware } from "../middlewares";
import { ItemSectionController } from "../controllers/item-section.controller";
import { ItemSectionMiddleware } from "../middlewares/item-section.middleware";

const router = Router();

router.get("/get-all", ItemSectionController.getAll);

router.put(
  "/update/:id",
  updateItemSectionSchema,
  ValidateMiddleware.validate,
  ItemSectionMiddleware.notExists,
  ItemSectionController.update,
);

export default router;

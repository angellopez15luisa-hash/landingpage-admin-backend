import { Router } from "express";
import { CatalogItemController } from "../controllers";
import { updateCatalogItemSchema } from "../schemas/catalog-item.schema";
import { CatalogItemMiddleware, ValidateMiddleware } from "../middlewares";

const router = Router();

router.get("/get-all", CatalogItemController.getAll);

router.put(
  "/update/:id",
  updateCatalogItemSchema,
  ValidateMiddleware.validate,
    CatalogItemMiddleware.notExists,
    CatalogItemMiddleware.notExistCatalogCategoryId,
    CatalogItemController.update,
);

export default router;

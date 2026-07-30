import { Router } from "express";
import { CatalogCategoryController } from "../controllers";
import { updateCatalogCategorySchema } from "../schemas/catalog-category.schema";
import { CatalogCategoryMiddleware, ValidateMiddleware } from "../middlewares";

const router = Router();

router.get("/get-all", CatalogCategoryController.getAll);

router.put(
  "/update/:id",
  updateCatalogCategorySchema,
  ValidateMiddleware.validate,
  CatalogCategoryMiddleware.notExists,
  CatalogCategoryController.update,
);

export default router;

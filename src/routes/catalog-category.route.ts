import { Router } from "express";
import { CatalogCategoryController } from "../controllers";
import { CatalogCategorySchema } from "../schemas";
import { validateSchema } from "../middlewares/validate.middleware";
import { UserMiddleware } from "../middlewares";

const router = Router();

router.use(UserMiddleware.verifyToken);

router.get("/", CatalogCategoryController.getAll);

router.get(
  "/:id",
  validateSchema(CatalogCategorySchema.getById),
  CatalogCategoryController.getById,
);

router.post(
  "/",
  validateSchema(CatalogCategorySchema.create),
  CatalogCategoryController.create,
);

router.patch(
  "/:id",
  validateSchema(CatalogCategorySchema.update),
  CatalogCategoryController.update,
);

router.delete(
  "/:id",
  validateSchema(CatalogCategorySchema.getById),
  CatalogCategoryController.delete,
);

export default router;

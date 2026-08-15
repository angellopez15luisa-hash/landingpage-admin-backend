import { Router } from "express";
import { CatalogItemController } from "../controllers";
import { validateSchema } from "../middlewares/validate.middleware";
import { CatalogItemSchema } from "../schemas";
import { upload } from "../config/cloudinary.config";

const router = Router();

router.get("/", CatalogItemController.getAll);

router.get(
  "/:id",
  validateSchema(CatalogItemSchema.getById),
  CatalogItemController.get,
);

router.post(
  "/",
  upload.single("imagePath"),
  validateSchema(CatalogItemSchema.create),
  CatalogItemController.create,
);

router.patch(
  "/:id",
  upload.single("imagePath"),
  validateSchema(CatalogItemSchema.update),
  CatalogItemController.update,
);

router.delete(
  "/:id",
  validateSchema(CatalogItemSchema.getById),
  CatalogItemController.delete,
);

export default router;

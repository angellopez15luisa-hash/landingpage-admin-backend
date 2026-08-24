import { Router } from "express";
import { ReviewOpinionController } from "../controllers";
import { UserMiddleware } from "../middlewares";
import { validateSchema } from "../middlewares/validate.middleware";
import { ReviewOpinionSchema } from "../schemas";

const router = Router();

router.get("/public", ReviewOpinionController.getAll);

router.use(UserMiddleware.verifyToken);

router.get("/", ReviewOpinionController.getAll);

router.get(
  "/:id",
  validateSchema(ReviewOpinionSchema.getById),
  ReviewOpinionController.getById,
);

router.post(
  "/",
  validateSchema(ReviewOpinionSchema.create),
  ReviewOpinionController.create,
);

router.patch(
  "/:id",
  validateSchema(ReviewOpinionSchema.update),
  ReviewOpinionController.update,
);

router.delete(
  "/:id",
  validateSchema(ReviewOpinionSchema.getById),
  ReviewOpinionController.delete,
);

export default router;

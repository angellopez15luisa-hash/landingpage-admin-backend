import { Router } from "express";
import { ReviewOpinionController } from "../controllers";
import { updateReviewOpinionSchema } from "../schemas/review-opinion.schema";
import { ReviewOpinionMiddleware, ValidateMiddleware } from "../middlewares";

const router = Router();

router.get("/get-all", ReviewOpinionController.getAll);

router.put(
  "/update/:id",
  updateReviewOpinionSchema,
  ValidateMiddleware.validate,
  ReviewOpinionMiddleware.notExists,
  ReviewOpinionController.update,
);

export default router;

import { Router } from "express";
import { FaqItemQuestionController } from "../controllers";
import { updateFaqItemQuestionSchema } from "../schemas/faq-item-question.schema";
import { FaqItemQuestionMiddleware, ValidateMiddleware } from "../middlewares";

const router = Router();

router.get("/get-all", FaqItemQuestionController.getAll);

router.put(
  "/update/:id",
  updateFaqItemQuestionSchema,
  ValidateMiddleware.validate,
  FaqItemQuestionMiddleware.notExists,
  FaqItemQuestionController.update,
);

export default router;

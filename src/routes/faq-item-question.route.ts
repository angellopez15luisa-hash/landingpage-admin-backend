import { Router } from "express";
import { FaqItemQuestionController } from "../controllers";
import { updateFaqItemQuestionSchema } from "../schemas/faq-item-question.schema";
import { FaqItemQuestionMiddleware, ValidateMiddleware } from "../middlewares";
import { validateSchema } from "../middlewares/validate.middleware";
import { FaqItemQuestionSchema } from "../schemas";

const router = Router();

router.get("/get-all", FaqItemQuestionController.getAll);

router.patch(
  "/update/:id",
  validateSchema(FaqItemQuestionSchema.update),
  FaqItemQuestionController.update,
);

export default router;

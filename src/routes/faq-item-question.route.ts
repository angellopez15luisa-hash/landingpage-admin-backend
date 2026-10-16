import { Router } from "express";
import { FaqItemQuestionController } from "../controllers";
import {
  UserMiddleware
} from "../middlewares";
import { validateSchema } from "../middlewares/validate.middleware";
import { FaqItemQuestionSchema } from "../schemas";

const router = Router();

router.get("/public", FaqItemQuestionController.getAll);

router.use(UserMiddleware.verifyToken);

router.get("/", FaqItemQuestionController.getAll);

router.get(
  "/:id",
  validateSchema(FaqItemQuestionSchema.getById),
  FaqItemQuestionController.getById,
);

router.post(
  "/",
  validateSchema(FaqItemQuestionSchema.create),
  FaqItemQuestionController.create,
);

router.patch(
  "/:id",
  validateSchema(FaqItemQuestionSchema.update),
  FaqItemQuestionController.update,
);

router.delete(
  "/:id",
  validateSchema(FaqItemQuestionSchema.getById),
  FaqItemQuestionController.delete,
);

export default router;

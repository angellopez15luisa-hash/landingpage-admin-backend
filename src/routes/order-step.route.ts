import { Router } from "express";
import { OrderStepController } from "../controllers";
import { validateSchema } from "../middlewares/validate.middleware";
import { OrderStepSchema } from "../schemas";
import { UserMiddleware } from "../middlewares";

const router = Router();

router.get("/public", OrderStepController.getAll);

router.use(UserMiddleware.verifyToken);

router.get("/", OrderStepController.getAll);

router.get(
  "/:id",
  validateSchema(OrderStepSchema.getById),
  OrderStepController.getById,
);

router.patch(
  "/:id",
  validateSchema(OrderStepSchema.update),
  OrderStepController.update,
);

export default router;

import { Router } from "express";
import { OrderStepController } from "../controllers";
import { updateOrderStepSchema } from "../schemas/order-step.schema";
import { ValidateMiddleware } from "../middlewares";
import { OrderStepMiddleware } from "../middlewares/order-step.middleware";

const router = Router();

router.get("/get-all", OrderStepController.getAll);

router.put(
  "/update/:id",
  updateOrderStepSchema,
  ValidateMiddleware.validate,
  OrderStepMiddleware.notExists,
  OrderStepController.update,
);

export default router;

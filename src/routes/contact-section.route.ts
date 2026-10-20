import { Router } from "express";
import { validateSchema } from "../middlewares/validate.middleware";
import { contactSendEmailSchema } from "../schemas";
import { ContactController } from "../controllers";

const router = Router();

router.post(
  "/send-email",
  validateSchema(contactSendEmailSchema),
  ContactController.sendEmail,
);

export default router;

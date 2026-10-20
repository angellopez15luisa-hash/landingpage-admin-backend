import { Router } from "express";
import { validateSchema } from "../middlewares/validate.middleware";
import { contactSendEmailSchema } from "../schemas";

const router = Router();

router.post("/send-email", validateSchema(contactSendEmailSchema));

export default router;

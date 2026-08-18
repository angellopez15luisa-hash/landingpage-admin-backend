import { Router } from "express";

import { validateSchema } from "../middlewares/validate.middleware";
import { UserSchema } from "../schemas";
import { UserController } from "../controllers";
import { UserMiddleware } from "../middlewares";

const router = Router();

router.post(
  "/sign-in",
  validateSchema(UserSchema.signIn),
  UserController.signIn,
);

router.get("/profile", UserMiddleware.verifyToken, UserController.getProfile);

router.patch(
  "/update-password",
  [UserMiddleware.verifyToken, validateSchema(UserSchema.updatePassword)],
  UserController.updatePassword,
);

router.post(
  "/forgot-password",
  validateSchema(UserSchema.forgotPassword),
  UserController.forgotPassword,
);

router.get(
  "/verify-reset-token/:token",
  validateSchema(UserSchema.verifyResetTokenSchema),
  UserController.verifyToken,
);

router.post(
  "/reset-password/:token",
  validateSchema(UserSchema.resetPasswordSchema),
  UserController.resetPassword,
);

export default router;

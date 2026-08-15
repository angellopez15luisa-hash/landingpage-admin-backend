import { Router } from "express";
import { SocialLinkController } from "../controllers";
import { updateSocialLinkSchema } from "../schemas/social-link.schema";
import { SocialLinkMiddleware, ValidateMiddleware } from "../middlewares";
import { validateSchema } from "../middlewares/validate.middleware";
import { SocialLinkSchema } from "../schemas";

const router = Router();

router.get("/get-all", SocialLinkController.getAll);

// router.put(
//   "/update/:id",
//   updateSocialLinkSchema,
//   ValidateMiddleware.validate,
//   SocialLinkMiddleware.notExists,
//   SocialLinkController.update,
// );

router.patch(
  "/update/:id",
  validateSchema(SocialLinkSchema.update),
  SocialLinkController.update,
);
export default router;

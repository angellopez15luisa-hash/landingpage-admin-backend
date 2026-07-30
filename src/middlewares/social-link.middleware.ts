import { NextFunction, Request, Response } from "express";
import { ISocialLinkUpdateParams } from "../types/social-link.type";
import { SocialLink } from "../models";
import { CustomError } from "../types/custom";

export class SocialLinkMiddleware {
  static notExists = async (
    req: Request<ISocialLinkUpdateParams, {}, {}, {}>,
    res: Response<void>,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const socialLink = await SocialLink.findByPk(id);
      if (!socialLink) {
        const error = new CustomError("social-link no existe", 404);
        return next(error);
      }
      res.locals.socialLink = socialLink;
      next();
    } catch (error) {
      next(error);
    }
  };
}
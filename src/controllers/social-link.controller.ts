import { NextFunction, Request, Response } from "express";
import {
  ISocialLinkGetAllResponse,
  ISocialLinkUpdateBody,
  ISocialLinkUpdateParams,
  ISocialLinkUpdateResponse,
} from "../types/social-link.type";
import { SocialLink } from "../models";

export class SocialLinkController {
  static getAll = async (
    req: Request<{}, {}, {}, {}>,
    res: Response<ISocialLinkGetAllResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const socialLinks = await SocialLink.findAll({
        attributes: ["id", "name", "url", "icon", "flag"],
      });

      res.status(200).json({
        socialLinks,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (
    req: Request<ISocialLinkUpdateParams, {}, ISocialLinkUpdateBody, {}>,
    res: Response<ISocialLinkUpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const socialLink = res.locals.socialLink;
      Object.assign(socialLink, {
        ...req.body,
      });
      await socialLink.save();
      res.status(200).json({
        message: "social-link actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}

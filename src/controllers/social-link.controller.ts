import { NextFunction, Request, Response } from "express";
import {
  ISocialLinkGetAllResponse,
  ISocialLinkUpdateBody,
  ISocialLinkUpdateParams,
  ISocialLinkUpdateResponse,
} from "../types/social-link.type";
import { SocialLink } from "../models";
import { SocialLinkService } from "../services";
import { SocialLinkType } from "../types";

export class SocialLinkController {
  static getAll = async (
    req: Request,
    res: Response<SocialLinkType.GetAllResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // const socialLinks = await SocialLink.findAll({
      //   attributes: ["id", "name", "url", "icon", "flag"],
      // });
      const socialLinks = await SocialLinkService.getAll();
      res.status(200).json({
        socialLinks,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (
    req: Request<SocialLinkType.UpdateParams, {}, SocialLinkType.UpdateBody>,
    res: Response<SocialLinkType.UpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // const socialLink = res.locals.socialLink;
      // Object.assign(socialLink, {
      //   ...req.body,
      // });
      // await socialLink.save();
      await SocialLinkService.update(Number(req.params.id), req.body);
      res.status(200).json({
        message: "social-link actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}

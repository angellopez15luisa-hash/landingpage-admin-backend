import { NextFunction, Request, Response } from "express";
import {
  IFooterSectionGetResponse,
  IFooterSectionUpdateBody,
  IFooterSectionUpdateParams,
  IFooterSectionUpdateResponse,
} from "../types/footer-section.type";
import { FooterSection } from "../models";

export class FooterSectionController {
  static get = async (
    req: Request<{}, {}, {}, {}>,
    res: Response<IFooterSectionGetResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const footerSection = await FooterSection.findOne({
        attributes: [
          "id",
          "textLogo",
          "description",
          "phone",
          "iconPhone",
          "email",
          "iconEmail",
          "address",
          "iconAddress",
          "hours",
          "iconHours",
        ],
        order: [["id", "asc"]],
      });

      res.status(200).json({
        footerSection,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (
    req: Request<IFooterSectionUpdateParams, {}, IFooterSectionUpdateBody, {}>,
    res: Response<IFooterSectionUpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const footerSection = res.locals.footerSection;
      Object.assign(footerSection, {
        ...req.body,
      });
      await footerSection.save();
      res.status(200).json({
        message: "footer-section actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}

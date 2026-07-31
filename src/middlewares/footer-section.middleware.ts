import { NextFunction, Request, Response } from "express";
import { IFooterSectionUpdateParams } from "../types/footer-section.type";
import { FooterSection } from "../models";
import { CustomError } from "../types/custom";

export class FooterSectionMiddleware {
  static notExists = async (
    req: Request<IFooterSectionUpdateParams, {}, {}, {}>,
    res: Response<void>,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const footerSection = await FooterSection.findByPk(id);
      if (!footerSection) {
        const error = new CustomError("footer-section no existe", 404);
        return next(error);
      }
      res.locals.footerSection = footerSection;
      next();
    } catch (error) {
      next(error);
    }
  };
}
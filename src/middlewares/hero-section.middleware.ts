import { NextFunction, Request, Response } from "express";
import { IHeroSectionUpdateParams } from "../types/hero-section.type";
import { HeroSection } from "../models";
import { CustomError } from "../types/custom";

export class HeroSectionMiddleware {
  static notExists = async (
    req: Request<IHeroSectionUpdateParams, {}, {}, {}>,
    res: Response<void>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const heroSection = await HeroSection.findByPk(id);
      if (!heroSection) {
        const error = new CustomError("hero-section no existe", 404);
        return next(error);
      }
      res.locals.heroSection = heroSection;
      next();
    } catch (error) {
      next(error);
    }
  };
}

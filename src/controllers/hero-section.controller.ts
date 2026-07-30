import { NextFunction, Request, Response } from "express";
import {
  IHeroSectionGetAllResponse,
  IHeroSectionUpdateBody,
  IHeroSectionUpdateParams,
  IHeroSectionUpdateResponse,
} from "../types/hero-section.type";
import { HeroSection } from "../models";

export class HeroSectionController {
  static getAll = async (
    req: Request<{}, {}, {}, {}>,
    res: Response<IHeroSectionGetAllResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const heroSections = await HeroSection.findAll({
        attributes: [
          "id",
          "imagePath",
          "tag",
          "title",
          "highlightText",
          "description",
        ],
      });

      res.status(200).json({
        success: true,
        heroSections: heroSections,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (
    req: Request<IHeroSectionUpdateParams, {}, IHeroSectionUpdateBody, {}>,
    res: Response<IHeroSectionUpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const heroSection = res.locals.heroSection;
      Object.assign(heroSection, {
        ...req.body,
      });
      await heroSection.save();
      res.status(201).json({
        message: "hero-section actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}

import { NextFunction, Request, Response } from "express";
import {
  IFooterSectionGetResponse,
  IFooterSectionUpdateBody,
  IFooterSectionUpdateParams,
  IFooterSectionUpdateResponse,
} from "../types/footer-section.type";
import { FooterSection } from "../models";
import { FooterSectionType } from "../types";
import { FooterSectionService } from "../services";

export class FooterSectionController {
  static get = async (
    req: Request,
    res: Response<FooterSectionType.GetResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const footerSection = await FooterSectionService.get();
      res.status(200).json({
        footerSection,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (
    req: Request<
      FooterSectionType.UpdateParams,
      {},
      FooterSectionType.UpdateBody
    >,
    res: Response<FooterSectionType.UpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      await FooterSectionService.update(id, req.body);
      res.status(200).json({
        message: "footer-section actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}

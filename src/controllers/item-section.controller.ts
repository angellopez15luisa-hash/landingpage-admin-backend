import { NextFunction, Request, Response } from "express";
import { ItemSection } from "../models";
import {
  IItemSectionGetAllResponse,
  IItemSectionUpdateBody,
  IItemSectionUpdateParams,
  IItemSectionUpdateResponse
} from "../types/item-section.type";

export class ItemSectionController {
  static getAll = async (
    req: Request<{}, {}, {}, {}>,
    res: Response<IItemSectionGetAllResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const itemSections = await ItemSection.findAll({
        attributes: ["id", "text", "href", "flagNavbar", "flagFooter"],
      });
      res.status(200).json({
        itemSections,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (
    req: Request<IItemSectionUpdateParams, {}, IItemSectionUpdateBody, {}>,
    res: Response<IItemSectionUpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const itemSection = res.locals.itemSection;
      Object.assign(itemSection, {
        ...req.body,
      });
      await itemSection.save();
      res.status(201).json({
        message: "item-section actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}

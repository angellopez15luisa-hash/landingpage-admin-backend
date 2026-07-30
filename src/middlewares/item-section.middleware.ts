import { NextFunction, Request, Response } from "express";
import { IItemSectionUpdateParams } from "../types/item-section.type";
import { ItemSection } from "../models";
import { CustomError } from "../types/custom";

export class ItemSectionMiddleware {
  static exists = async (
    req: Request<IItemSectionUpdateParams, {}, {}, {}>,
    res: Response<void>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const itemSection = await ItemSection.findByPk(id);
      if (!itemSection) {
        const error = new CustomError("item-section no existe", 404);
        return next(error);
      }
      res.locals.itemSection = itemSection;
      next();
    } catch (error) {
      next(error);
    }
  };
}

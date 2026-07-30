import { NextFunction, Request, Response } from "express";
import {
  ICatalogItemUpdateBody,
  ICatalogItemUpdateParams,
} from "../types/catalog-item.type";
import { CatalogCategory, CatalogItem } from "../models";
import { CustomError } from "../types/custom";

export class CatalogItemMiddleware {
  static notExists = async (
    req: Request<ICatalogItemUpdateParams, {}, {}, {}>,
    res: Response<void>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const catalogItem = await CatalogItem.findByPk(id);
      if (!catalogItem) {
        const error = new CustomError("catalog-item no existe", 404);
        return next(error);
      }
      res.locals.catalogItem = catalogItem;
      next();
    } catch (error) {
      next(error);
    }
  };
  static notExistCatalogCategoryId = async (
    req: Request<{}, {}, ICatalogItemUpdateBody, {}>,
    res: Response<void>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { catalogCategoryId } = req.body;
      const catalogCategory = await CatalogCategory.findByPk(catalogCategoryId);
      if (!catalogCategory) {
        const error = new CustomError("catalog-category no existe", 404);
        return next(error);
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}

import { NextFunction, Request, Response } from "express";
import { ICatalogCategoryUpdateParams } from "../types/catalog-category.type";
import { CatalogCategory } from "../models";
import { CustomError } from "../types/custom";

export class CatalogCategoryMiddleware {
  static exists = async (
    req: Request<ICatalogCategoryUpdateParams, {}, {}, {}>,
    res: Response<void>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const catalogCategory = await CatalogCategory.findByPk(id);
      if (!catalogCategory) {
        const error = new CustomError("catalog-category no existe", 404);
        return next(error);
      }
      res.locals.catalogCategory = catalogCategory;
      next();
    } catch (error) {
      next(error);
    }
  };
}

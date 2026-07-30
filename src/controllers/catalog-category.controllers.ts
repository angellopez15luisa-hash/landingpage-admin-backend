import { NextFunction, Request, Response } from "express";
import {
  ICatalogCategoryGetAllResponse,
  ICatalogCategoryUpdateBody,
  ICatalogCategoryUpdateParams,
  ICatalogCategoryUpdateResponse,
} from "../types/catalog-category.type";
import { CatalogCategory } from "../models";

export class CatalogCategoryController {
  static getAll = async (
    req: Request<{}, {}, {}, {}>,
    res: Response<ICatalogCategoryGetAllResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const catalogCategories = await CatalogCategory.findAll({
        attributes: ["id", "text"],
      });

      res.status(200).json({
        catalogCategories,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (
    req: Request<
      ICatalogCategoryUpdateParams,
      {},
      ICatalogCategoryUpdateBody,
      {}
    >,
    res: Response<ICatalogCategoryUpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const catalogCategory = res.locals.catalogCategory;
      Object.assign(catalogCategory, {
        ...req.body,
      });
      await catalogCategory.save();
      res.status(201).json({
        message: "catalog-category actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}

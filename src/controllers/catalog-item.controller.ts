import { NextFunction, Request, Response } from "express";
import {
  ICatalogItemGetAllResponse,
  ICatalogItemUpdateBody,
  ICatalogItemUpdateParams,
  ICatalogItemUpdateResponse,
} from "../types/catalog-item.type";
import { CatalogCategory, CatalogItem } from "../models";

export class CatalogItemController {
  static getAll = async (
    req: Request,
    res: Response<ICatalogItemGetAllResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const catalogItems = await CatalogItem.findAll({
        attributes: [
          "id",
          "title",
          "catalogCategoryId",
          "price",
          "imagePath",
          "badge",
        ],
        include: [
          {
            model: CatalogCategory,
            as: "catalogCategory",
            attributes: ["id", "text"],
          },
        ],
      });
      res.status(200).json({
        catalogItems,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (
    req: Request<ICatalogItemUpdateParams, {}, ICatalogItemUpdateBody, {}>,
    res: Response<ICatalogItemUpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const catalogItem = res.locals.catalogItem;
      Object.assign(catalogItem, {
        ...req.body,
      });
      await catalogItem.save();
      res.status(201).json({
        message: "catalog-item actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}

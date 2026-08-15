import { NextFunction, Request, Response } from "express";
import { CatalogCategoryType } from "../types";
import { CatalogCategoryService } from "../services";

export class CatalogCategoryController {
  static getAll = async (
    req: Request,
    res: Response<CatalogCategoryType.GetAllResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const catalogCategories = await CatalogCategoryService.getAll();
      res.status(200).json({
        catalogCategories,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static getById = async (
    req: Request<CatalogCategoryType.GetParams>,
    res: Response<CatalogCategoryType.GetResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const catalogCategory = await CatalogCategoryService.getById(
        Number(req.params.id),
      );
      res.status(200).json({
        catalogCategory,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static create = async (
    req: Request<{}, {}, CatalogCategoryType.CreateBody>,
    res: Response<CatalogCategoryType.CreateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      await CatalogCategoryService.create(req.body);
      res.status(201).json({
        message: "catalog-category se creo satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (
    req: Request<
      CatalogCategoryType.UpdateParams,
      {},
      CatalogCategoryType.UpdateBody
    >,
    res: Response<CatalogCategoryType.UpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      await CatalogCategoryService.update(id, req.body);
      res.status(201).json({
        message: "catalog-category actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static delete = async (
    req: Request<CatalogCategoryType.DeleteParams>,
    res: Response<CatalogCategoryType.DeleteResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      await CatalogCategoryService.delete(Number(req.params.id));
      res.status(201).json({
        message: "catalog-category se elimino satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}

import { NextFunction, Request, Response } from "express";
import { ItemSection } from "../models";
import {
  IItemSectionGetAllResponse,
  IItemSectionUpdateBody,
  IItemSectionUpdateParams,
  IItemSectionUpdateResponse,
} from "../types/item-section.type";
import { ItemSectionType } from "../types";
import { ItemSectionService } from "../services";

export class ItemSectionController {
  static getAll = async (
    req: Request,
    res: Response<ItemSectionType.GetAllResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const itemSections = await ItemSectionService.getAll();
      res.status(200).json({
        itemSections,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static async getById(
    req: Request<ItemSectionType.GetParams>,
    res: Response<ItemSectionType.GetResponse>,
    next: NextFunction,
  ): Promise<void> {
    try {
      const itemSection = await ItemSectionService.getById(
        Number(req.params.id),
      );
      res.status(200).json({
        itemSection,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  }

  static update = async (
    req: Request<ItemSectionType.UpdateParams, {}, ItemSectionType.UpdateBody>,
    res: Response<ItemSectionType.UpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      await ItemSectionService.update(id, req.body);
      res.status(201).json({
        message: "item-section actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}

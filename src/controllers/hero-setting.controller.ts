import { NextFunction, Request, Response } from "express";
import { HeroSettingService } from "../services";
import { HeroSettingType } from "../types";

export class HeroSettingController {
  static get = async (
    req: Request,
    res: Response<HeroSettingType.GetResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const heroSetting = await HeroSettingService.get();
      res.status(200).json({
        success: true,
        heroSetting,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (
    req: Request<HeroSettingType.UpdateParams, {}, HeroSettingType.UpdateBody>,
    res: Response<HeroSettingType.UpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
      try {
      await HeroSettingService.update(Number(req.params.id), req.body);
      res.status(201).json({
        message: "hero-setting actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}

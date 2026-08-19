import { NextFunction, Request, Response } from "express";
import { GeneralSettingType } from "../types";
import { GeneralSettingService } from "../services";
import { Server } from "socket.io";

export class GeneralSettingController {
  static get = async (
    req: Request,
    res: Response<GeneralSettingType.GetResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const generalSetting = await GeneralSettingService.get();
      res.status(200).json({
        success: true,
        generalSetting,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (
    req: Request<
      GeneralSettingType.UpdateParams,
      {},
      GeneralSettingType.UpdateBody
    >,
    res: Response<GeneralSettingType.UpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      await GeneralSettingService.update(Number(req.params.id), req.body);

       const io = req.app.get("io") as Server | undefined;
        if (io) {
          io.emit("general-setting", { action: "update" });
        }

      res.status(201).json({
        message: "general-setting actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}

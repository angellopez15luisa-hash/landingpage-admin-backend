import { NextFunction, Request, Response } from "express";
import {
  IOrderStepGetAllResponse,
  IOrderStepUpdateBody,
  IOrderStepUpdateParams,
  IOrderStepUpdateResponse,
} from "../types/order-step.type";
import { OrderStep } from "../models";
import { OrderStepType } from "../types";
import { OrderStepService } from "../services";

export class OrderStepController {
  static getAll = async (
    req: Request,
    res: Response<OrderStepType.GetAllResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const orderSteps = await OrderStepService.getAll();
      res.status(200).json({
        orderSteps,
        success: false,
      });
    } catch (error) {
      next(error);
    }
  };

  static getById = async (
    req: Request<OrderStepType.GetParams>,
    res: Response<OrderStepType.GetResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const orderStep = await OrderStepService.getById(Number(req.params.id));
      res.status(200).json({
        orderStep,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (
    req: Request<OrderStepType.UpdateParams, {}, OrderStepType.UpdateBody>,
    res: Response<OrderStepType.UpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      await OrderStepService.update(id, req.body);
      res.status(201).json({
        message: "order-step actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}

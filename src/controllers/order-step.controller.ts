import { NextFunction, Request, Response } from "express";
import {
  IOrderStepGetAllResponse,
  IOrderStepUpdateBody,
  IOrderStepUpdateParams,
  IOrderStepUpdateResponse,
} from "../types/order-step.type";
import { OrderStep } from "../models";

export class OrderStepController {
  static getAll = async (
    req: Request<{}, {}, {}, {}>,
    res: Response<IOrderStepGetAllResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const orderSteps = await OrderStep.findAll({
        attributes: ["id", "number", "title", "description"],
      });

      res.status(200).json({
        orderSteps,
        success: false,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (
    req: Request<IOrderStepUpdateParams, {}, IOrderStepUpdateBody, {}>,
    res: Response<IOrderStepUpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const orderStep = res.locals.orderStep;
      Object.assign(orderStep, {
        ...req.body,
      });
      await orderStep.save();
      res.status(201).json({
        message: "order-step actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}

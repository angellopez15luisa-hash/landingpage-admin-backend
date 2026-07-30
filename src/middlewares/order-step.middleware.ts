import { NextFunction, Request, Response } from "express";
import { IOrderStepUpdateParams } from "../types/order-step.type";
import { OrderStep } from "../models";
import { CustomError } from "../types/custom";

export class OrderStepMiddleware {
  static exists = async (
    req: Request<IOrderStepUpdateParams, {}, {}, {}>,
    res: Response<void>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const orderStep = await OrderStep.findByPk(id);
      if (!orderStep) {
        const error = new CustomError("order-step no existe", 404);
        return next(error);
      }
      res.locals.orderStep = orderStep;
      next();
    } catch (error) {
      next(error);
    }
  };
}

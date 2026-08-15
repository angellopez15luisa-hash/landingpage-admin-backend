import { OrderStep } from "../models";
import { OrderStepType } from "../types";
import { CustomError } from "../types/custom";

export class OrderStepService {
  static async getAll(): Promise<OrderStepType.Response[]> {
    return await OrderStep.findAll({
      attributes: ["id", "number", "title", "description"],
    });
  }

  static async getById(id: OrderStep["id"]): Promise<OrderStepType.Response> {
    const orderStep = await OrderStep.findByPk(id);
    if (!orderStep) throw new CustomError("order-step no existe", 404);
    return orderStep;
  }
  static async update(
    id: OrderStep["id"],
    data: OrderStepType.UpdateBody,
  ): Promise<void> {
    const orderStep = await this.getById(id);
    await orderStep.update(data);
  }
}

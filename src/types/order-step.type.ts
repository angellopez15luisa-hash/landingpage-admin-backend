import z from "zod";
import { OrderStep } from "../models";
import { OrderStepSchema } from "../schemas";
import { IMessageResponse, MessageResponse } from "./custom";

export type IOrderStep = Pick<
  OrderStep,
  "id" | "number" | "title" | "description"
>;

export type IOrderStepCreateBody = Omit<IOrderStep, "id">;

export type IOrderStepUpdateBody = Omit<IOrderStep, "id">;

export type IOrderStepUpdateParams = Pick<IOrderStep, "id">;

export interface IOrderStepGetAllResponse extends Omit<
  IMessageResponse,
  "message"
> {
  orderSteps: IOrderStep[];
}

export type IOrderStepUpdateResponse = IMessageResponse;

export namespace OrderStepType {
  export type UpdateParams = z.infer<typeof OrderStepSchema.update>["params"];

  export type UpdateBody = z.infer<typeof OrderStepSchema.update>["body"];

  export type GetParams = z.infer<typeof OrderStepSchema.getById>["params"];

  export type Response = OrderStep;

  export type GetResponse = Omit<MessageResponse, "message"> & {
    orderStep: Response;
  };

  export type GetAllResponse = Omit<MessageResponse, "message"> & {
    orderSteps: Response[];
  };

  export type UpdateResponse = MessageResponse;
}

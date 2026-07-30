import { OrderStep } from "../models";
import { IMessageResponse } from "./custom";

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

import { ReviewOpinion } from "../models";
import { IMessageResponse, MessageResponse } from "./custom";
import { ReviewOpinionSchema } from "../schemas";
import z from "zod";

export type IReviewOpinion = Pick<
  ReviewOpinion,
  "id" | "name" | "rating" | "text"
>;

export type IReviewOpinionCreateBody = Omit<IReviewOpinion, "id">;

export type IReviewOpinionUpdateBody = Omit<IReviewOpinion, "id">;

export type IReviewOpinionUpdateParams = Pick<IReviewOpinion, "id">;

export interface IReviewOpinionGetAllResponse extends Omit<
  IMessageResponse,
  "message"
> {
  reviewOpinions: IReviewOpinion[];
}

export type IReviewOpinionUpdateResponse = IMessageResponse;

export namespace ReviewOpnionType {
  
  export type UpdateParams = z.infer<
    typeof ReviewOpinionSchema.update
  >["params"];

  export type UpdateBody = z.infer<typeof ReviewOpinionSchema.update>["body"];

  export type Response = ReviewOpinion;

  export type GetAllResponse = Omit<MessageResponse, "message"> & {
    reviewOpinions: Response[];
  };

  export type UpdateResponse = MessageResponse;
}

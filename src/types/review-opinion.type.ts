import { ReviewOpinion } from "../models";
import { IMessageResponse } from "./custom";

export type IReviewOpinion = Pick<ReviewOpinion, "id" | "name" | "rating" | "text">;

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
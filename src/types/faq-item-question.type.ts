import { FaqItemQuestion } from "../models";
import { IMessageResponse } from "./custom";

export type IFaqItemQuestion = Pick<FaqItemQuestion, "id" | "question" | "answer">;

export type IFaqItemQuestionCreateBody = Omit<IFaqItemQuestion, "id">;

export type IFaqItemQuestionUpdateBody = Omit<IFaqItemQuestion, "id">;

export type IFaqItemQuestionUpdateParams = Pick<IFaqItemQuestion, "id">;

export interface IFaqItemQuestionGetAllResponse extends Omit<
  IMessageResponse,
  "message"
> {
  faqItemQuestions: IFaqItemQuestion[];
}

export type IFaqItemQuestionUpdateResponse = IMessageResponse;
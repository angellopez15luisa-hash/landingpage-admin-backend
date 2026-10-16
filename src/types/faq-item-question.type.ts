import z from "zod";
import { FaqItemQuestion } from "../models";
import { IMessageResponse, MessageResponse } from "./custom";
import { FaqItemQuestionSchema } from "../schemas";

export type IFaqItemQuestion = Pick<
  FaqItemQuestion,
  "id" | "question" | "answer"
>;

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

export namespace FaqItemQuestionType {
  export type UpdateParams = z.infer<
    typeof FaqItemQuestionSchema.update
  >["params"];

  export type UpdateBody = z.infer<typeof FaqItemQuestionSchema.update>["body"];

  export type CreateBody = z.infer<typeof FaqItemQuestionSchema.create>["body"];

  export type GetByIdParams = z.infer<
    typeof FaqItemQuestionSchema.getById
  >["params"];

  export type DeleteParams = GetByIdParams;

  export type Response = FaqItemQuestion;

  export type GetAllResponse = Omit<MessageResponse, "message"> & {
    faqItemQuestions: Response[];
  };

  export type GetByIdResponse = Omit<MessageResponse, "message"> & {
    faqItemQuestion: Response;
  };

  export type UpdateResponse = MessageResponse;
}

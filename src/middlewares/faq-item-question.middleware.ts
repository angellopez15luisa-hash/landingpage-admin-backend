import { NextFunction, Request, Response } from "express";
import { IFaqItemQuestionUpdateParams } from "../types/faq-item-question.type";
import { FaqItemQuestion } from "../models";
import { CustomError } from "../types/custom";

export class FaqItemQuestionMiddleware {
  static notExists = async (
    req: Request<IFaqItemQuestionUpdateParams, {}, {}, {}>,
    res: Response<void>,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const faqItemQuestion = await FaqItemQuestion.findByPk(id);
      if (!faqItemQuestion) {
        const error = new CustomError("faq-item-question no existe", 404);
        return next(error);
      }
      res.locals.faqItemQuestion = faqItemQuestion;
      next();
    } catch (error) {
      next(error);
    }
  };
}
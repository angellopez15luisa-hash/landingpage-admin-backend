import { NextFunction, Request, Response } from "express";
import {
  IFaqItemQuestionGetAllResponse,
  IFaqItemQuestionUpdateBody,
  IFaqItemQuestionUpdateParams,
  IFaqItemQuestionUpdateResponse,
} from "../types/faq-item-question.type";
import { FaqItemQuestion } from "../models";

export class FaqItemQuestionController {
  static getAll = async (
    req: Request<{}, {}, {}, {}>,
    res: Response<IFaqItemQuestionGetAllResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const faqItemQuestions = await FaqItemQuestion.findAll({
        attributes: ["id", "question", "answer"],
      });

      res.status(200).json({
        faqItemQuestions,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (
    req: Request<IFaqItemQuestionUpdateParams,{},IFaqItemQuestionUpdateBody,{}>,
    res: Response<IFaqItemQuestionUpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const faqItemQuestion = res.locals.faqItemQuestion;
      Object.assign(faqItemQuestion, {
        ...req.body,
      });
      await faqItemQuestion.save();
      res.status(200).json({
        message: "faq-item-question actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}

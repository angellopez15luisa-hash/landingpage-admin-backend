import { NextFunction, Request, Response } from "express";
import {
  IFaqItemQuestionGetAllResponse,
  IFaqItemQuestionUpdateBody,
  IFaqItemQuestionUpdateParams,
  IFaqItemQuestionUpdateResponse,
} from "../types/faq-item-question.type";
import { FaqItemQuestion } from "../models";
import { FaqItemQuestionType } from "../types";
import { FaqItemQuestionService } from "../services";

export class FaqItemQuestionController {
  static getAll = async (
    req: Request,
    res: Response<FaqItemQuestionType.GetAllResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const faqItemQuestions = await FaqItemQuestionService.getAll();
      res.status(200).json({
        faqItemQuestions,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (
    req: Request<
      FaqItemQuestionType.UpdateParams,
      {},
      FaqItemQuestionType.UpdateBody,
      {}
    >,
    res: Response<FaqItemQuestionType.UpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      await FaqItemQuestionService.update(id, req.body);
      res.status(200).json({
        message: "faq-item-question actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}

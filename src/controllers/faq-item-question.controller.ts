import { NextFunction, Request, Response } from "express";
import { FaqItemQuestionType } from "../types";
import { FaqItemQuestionService } from "../services";
import { MessageResponse } from "../types/custom";
import { Server } from "socket.io";

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

  static getById = async (
    req: Request<FaqItemQuestionType.GetByIdParams>,
    res: Response<FaqItemQuestionType.GetByIdResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const faqItemQuestion = await FaqItemQuestionService.getById(
        Number(req.params.id),
      );
      res.status(200).json({
        success: false,
        faqItemQuestion,
      });
    } catch (error) {
      next(error);
    }
  };

  static create = async (
    req: Request<{}, {}, FaqItemQuestionType.CreateBody>,
    res: Response<MessageResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const message = await FaqItemQuestionService.create(req.body);

      const io = req.app.get("io") as Server | undefined;
      if (io) {
        io.emit("faq-item-question", { action: "create" });
      }

      res.status(201).json({
        message,
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

      const io = req.app.get("io") as Server | undefined;
      if (io) {
        io.emit("faq-item-question", { action: "update" });
      }

      res.status(200).json({
        message: "faq-item-question actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static delete = async (
    req: Request<FaqItemQuestionType.DeleteParams>,
    res: Response<MessageResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const message = await FaqItemQuestionService.delete(Number(req.params.id))

       const io = req.app.get("io") as Server | undefined;
      if (io) {
        io.emit("faq-item-question", { action: "delete" });
      }
      res.status(200).json({
        message,
        success: true,
      });

    } catch (error) {
      next(error)
    }
  };
}

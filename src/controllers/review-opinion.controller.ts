import { NextFunction, Request, Response } from "express";
import { ReviewOpinionService } from "../services";
import { ReviewOpnionType } from "../types";
import { MessageResponse } from "../types/custom";

export class ReviewOpinionController {
  static getAll = async (
    req: Request,
    res: Response<ReviewOpnionType.GetAllResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // const reviewOpinions = await ReviewOpinion.findAll({
      //   attributes: ["id", "name", "rating", "text"],
      // });
      const reviewOpinions = await ReviewOpinionService.getAll();
      res.status(200).json({
        reviewOpinions,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static getById = async (
    req: Request<ReviewOpnionType.GetByIdParams>,
    res: Response<ReviewOpnionType.GetByIdResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const reviewOpinion = await ReviewOpinionService.getById(
        Number(req.params.id),
      );
      res.status(200).json({
        success: false,
        reviewOpinion,
      });
    } catch (error) {
      next(error);
    }
  };
  static create = async (
    req: Request<{}, {}, ReviewOpnionType.CreateBody>,
    res: Response<ReviewOpnionType.CreateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const message = await ReviewOpinionService.create(req.body);
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
      ReviewOpnionType.UpdateParams,
      {},
      ReviewOpnionType.UpdateBody
    >,
    res: Response<ReviewOpnionType.UpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // const reviewOpinion = res.locals.reviewOpinion;
      // Object.assign(reviewOpinion, {
      //   ...req.body,
      // });
      // await reviewOpinion.save();
      const id = Number(req.params.id);
      await ReviewOpinionService.update(id, req.body);
      res.status(200).json({
        message: "review-opinion actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static delete = async (
    req: Request<ReviewOpnionType.DeleteParams>,
    res: Response<MessageResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const message = await ReviewOpinionService.delete(Number(req.params.id));
      res.status(200).json({
        message,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}

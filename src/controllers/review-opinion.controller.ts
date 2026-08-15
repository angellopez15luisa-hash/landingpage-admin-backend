import { NextFunction, Request, Response } from "express";
import {
  IReviewOpinionGetAllResponse,
  IReviewOpinionUpdateBody,
  IReviewOpinionUpdateParams,
  IReviewOpinionUpdateResponse,
} from "../types/review-opinion.type";
import { ReviewOpinion } from "../models";
import { ReviewOpinionService } from "../services";
import { ReviewOpnionType } from "../types";

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
}

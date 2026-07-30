import { NextFunction, Request, Response } from "express";
import {
  IReviewOpinionGetAllResponse,
  IReviewOpinionUpdateBody,
  IReviewOpinionUpdateParams,
  IReviewOpinionUpdateResponse,
} from "../types/review-opinion.type";
import { ReviewOpinion } from "../models";

export class ReviewOpinionController {
  static getAll = async (
    req: Request<{}, {}, {}, {}>,
    res: Response<IReviewOpinionGetAllResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const reviewOpinions = await ReviewOpinion.findAll({
        attributes: ["id", "name", "rating", "text"],
      });

      res.status(200).json({
        reviewOpinions,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (
    req: Request<IReviewOpinionUpdateParams, {}, IReviewOpinionUpdateBody, {}>,
    res: Response<IReviewOpinionUpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const reviewOpinion = res.locals.reviewOpinion;
      Object.assign(reviewOpinion, {
        ...req.body,
      });
      await reviewOpinion.save();
      res.status(200).json({
        message: "review-opinion actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}

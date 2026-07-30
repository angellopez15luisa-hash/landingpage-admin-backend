import { NextFunction, Request, Response } from "express";
import { IReviewOpinionUpdateParams } from "../types/review-opinion.type";
import { ReviewOpinion } from "../models";
import { CustomError } from "../types/custom";

export class ReviewOpinionMiddleware {
  static notExists = async (
    req: Request<IReviewOpinionUpdateParams, {}, {}, {}>,
    res: Response<void>,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const reviewOpinion = await ReviewOpinion.findByPk(id);
      if (!reviewOpinion) {
        const error = new CustomError("review-opinion no existe", 404);
        return next(error);
      }
      res.locals.reviewOpinion = reviewOpinion;
      next();
    } catch (error) {
      next(error);
    }
  };
}
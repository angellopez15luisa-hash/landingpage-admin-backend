import { ReviewOpinion } from "../models";
import { ReviewOpnionType } from "../types";
import { CustomError } from "../types/custom";

export class ReviewOpinionService {
  static async getAll(): Promise<ReviewOpnionType.Response[]> {
    return await ReviewOpinion.findAll({
      attributes: ["id", "name", "rating", "text"],
    });
  }

  static async getById(
    id: ReviewOpinion["id"],
  ): Promise<ReviewOpnionType.Response> {
    const reviewOpinion = await ReviewOpinion.findByPk(id);
    if (!reviewOpinion) throw new CustomError("review-opinion no existe", 404);
    return reviewOpinion;
  }

  static async update(
    id: ReviewOpinion["id"],
    data: ReviewOpnionType.UpdateBody,
  ): Promise<void> {
    const reviewOpinion = await this.getById(id);
    await reviewOpinion.update(data);
  }
}

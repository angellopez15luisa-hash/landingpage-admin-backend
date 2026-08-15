import { FaqItemQuestion } from "../models";
import { FaqItemQuestionType } from "../types";
import { CustomError } from "../types/custom";

export class FaqItemQuestionService {
  static async getAll(): Promise<FaqItemQuestionType.Response[]> {
    return await FaqItemQuestion.findAll({
      attributes: ["id", "question", "answer"],
    });
  }

  static async getById(
    id: FaqItemQuestion["id"],
  ): Promise<FaqItemQuestionType.Response> {
    const faqItemQuestion = await FaqItemQuestion.findByPk(id);
    if (!faqItemQuestion) throw new CustomError("faq-item-question no existe", 404);
    return faqItemQuestion;
  }

  static async update(
    id: FaqItemQuestion["id"],
    data: FaqItemQuestionType.UpdateBody,
  ): Promise<void> {
    const faqItemQuestion = await this.getById(id);
    await faqItemQuestion.update(data);
  }
}

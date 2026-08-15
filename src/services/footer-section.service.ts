import { FooterSection } from "../models";
import { FooterSectionType } from "../types";
import { CustomError } from "../types/custom";

export class FooterSectionService {
  static async get(): Promise<FooterSectionType.Response> {
    return await FooterSection.findOne({
      attributes: [
        "id",
        "textLogo",
        "description",
        "phone",
        "iconPhone",
        "email",
        "iconEmail",
        "address",
        "iconAddress",
        "hours",
        "iconHours",
      ],
      order: [["id", "asc"]],
    });
  }

  static async getById(
    id: FooterSection["id"],
  ): Promise<FooterSectionType.Response> {
    const footerSection = await FooterSection.findByPk(id);
    if (!footerSection) throw new CustomError("footer-section no existe", 404);
    return footerSection;
  }

  static async update(
    id: FooterSection["id"],
    data: FooterSectionType.UpdateBody,
  ): Promise<void> {
    const footerSection = await this.getById(id);
    await footerSection.update(data);
  }
}

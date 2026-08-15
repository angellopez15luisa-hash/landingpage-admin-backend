import { SocialLink } from "../models";
import { SocialLinkType } from "../types";
import { CustomError } from "../types/custom";

export class SocialLinkService {
  static async getAll(): Promise<SocialLinkType.Response[]> {
    return await SocialLink.findAll({
      attributes: ["id", "name", "url", "icon", "flag"],
    });
  }

  static async getById(id: SocialLink["id"]): Promise<SocialLinkType.Response> {
    const socialLink = await SocialLink.findByPk(id);
    if (!socialLink) throw new CustomError("social-link no existe", 404);
    return socialLink;
  }

  static async update(
    id: SocialLink["id"],
    data: SocialLinkType.UpdateBody,
  ): Promise<void> {
    const socialLink = await this.getById(id);
    await socialLink.update(data);
  }
}

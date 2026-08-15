import { HeroSection } from "../models";
import { HeroSectionType } from "../types";
import { CustomError } from "../types/custom";

export class HeroSectionService {
  static async getAll(): Promise<HeroSectionType.Response[]> {
    return await HeroSection.findAll();
  }

  static async getById(
    id: HeroSection["id"],
  ): Promise<HeroSectionType.Response> {
    const heroSection = await HeroSection.findByPk(id);
    if (!heroSection) throw new CustomError("hero-section no existe", 404);
    return heroSection;
  }

  static async update(
    id: HeroSection["id"],
    data: HeroSectionType.UpdateBody,
  ): Promise<void> {
    const heroSection = await this.getById(id);
    await heroSection.update(data);
  }
}

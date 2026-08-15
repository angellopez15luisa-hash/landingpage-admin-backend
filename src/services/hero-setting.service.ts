import { HeroSetting } from "../models";
import { HeroSettingType } from "../types";
import { CustomError } from "../types/custom";

export class HeroSettingService {
  static get = async (): Promise<HeroSettingType.Response> => {
    return await HeroSetting.findOne({
      order: [["id", "asc"]],
    });
  };

  static getById = async (
    id: HeroSetting["id"],
  ): Promise<HeroSettingType.Response> => {
    const heroSetting = await HeroSetting.findByPk(id);
    if (!heroSetting) throw new CustomError("hero-setting no existe", 404);
    return heroSetting;
  };

  static update = async (
    id: HeroSetting["id"],
    data: HeroSettingType.UpdateBody,
  ): Promise<void> => {
    const heroSetting = await this.getById(id);
    await heroSetting.update(data);
  };
}

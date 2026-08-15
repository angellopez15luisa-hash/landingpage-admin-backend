import { GeneralSetting } from "../models";
import { GeneralSettingType } from "../types";
import { CustomError } from "../types/custom";

export class GeneralSettingService {
  static get = async (): Promise<GeneralSettingType.Response> => {
    return await GeneralSetting.findOne({
      order: [["id", "asc"]],
    });
  };

  static getById = async (
    id: GeneralSetting["id"],
  ): Promise<GeneralSettingType.Response> => {
    const generalSetting = await GeneralSetting.findByPk(id);
    if (!generalSetting)
      throw new CustomError("general-setting no existe", 404);
    return generalSetting;
  };

  static update = async (
    id: GeneralSetting["id"],
    data: GeneralSettingType.UpdateBody,
  ): Promise<void> => {
    const generalSetting = await this.getById(id);
    await generalSetting.update(data);
  };
}

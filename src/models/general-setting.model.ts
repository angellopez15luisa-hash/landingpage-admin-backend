import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import type { DbModels } from "../config";

export class GeneralSetting extends Model<
  InferAttributes<GeneralSetting>,
  InferCreationAttributes<GeneralSetting>
> {
  declare id: CreationOptional<number>;
  declare textNameCompany: string;
  declare textButtonNavbar: string;
  declare textButtonHeroSection: string;
  declare textTitleOrderStep: string;
  declare textSubtitleOrderStep: string;
  declare textTitleCatalogItem: string;
  declare textSubtitleCatalogItem: string;
  declare textTitleReviewOpinion: string;
  declare textSubtitleReviewOpinion: string;
  declare textTitleFaqItemQuestion: string;
  declare textSubtitleFaqItemQuestion: string;
  declare textPhoneFooterSection: string;
  declare textEmailFooterSection: string;
  declare textAddressFooterSection: string;
  declare textBusinessHoursFooterSection: string;

  public static associate(models: DbModels) {}
}

export const initGeneralSettingModel = (sequelize: Sequelize) => {
  GeneralSetting.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      textNameCompany: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      textButtonNavbar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      textButtonHeroSection: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      textTitleOrderStep: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      textSubtitleOrderStep: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      textTitleCatalogItem: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      textSubtitleCatalogItem: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      textTitleReviewOpinion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      textSubtitleReviewOpinion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      textTitleFaqItemQuestion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      textSubtitleFaqItemQuestion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      textPhoneFooterSection: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      textEmailFooterSection: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      textAddressFooterSection: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      textBusinessHoursFooterSection: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "GeneralSetting",
      tableName: "general_settings",
      defaultScope: {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    },
  );
};

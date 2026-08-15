import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import { DbModels } from "../config";

export class HeroSetting extends Model<
  InferAttributes<HeroSetting>,
  InferCreationAttributes<HeroSetting>
> {
  declare public id: CreationOptional<number>;
  declare public buttonText: string;

  public static associate(models: DbModels) {}
}

export const initHeroSettingModel = (sequelize: Sequelize) => {
  HeroSetting.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      buttonText: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      defaultScope: {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    },
  );
};

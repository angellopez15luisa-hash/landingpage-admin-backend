import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import { DbModels } from "../config/database.config";

export class HeroSection extends Model<
  InferAttributes<HeroSection>,
  InferCreationAttributes<HeroSection>
> {
  declare public id: CreationOptional<number>;
  declare public imagePath: string;
  declare public tag: string;
  declare public title: string;
  declare public highlightText: string;
  declare public description: string;

  public static associate(models: DbModels) {}
}

export const initHeroSectionModel = (sequelize: Sequelize) => {
  HeroSection.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      imagePath: { type: DataTypes.STRING, allowNull: false },
      tag: { type: DataTypes.STRING, allowNull: false },
      title: { type: DataTypes.STRING, allowNull: false },
      highlightText: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
    },
  );
};

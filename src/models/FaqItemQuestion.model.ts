import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import { DbModels } from "../config/database.config";

export class FaqItemQuestion extends Model<
  InferAttributes<FaqItemQuestion>,
  InferCreationAttributes<FaqItemQuestion>
> {
  declare public id: CreationOptional<number>;
  declare public question: string;
  declare public answer: string;
  declare public isActive: boolean;

  public static associate(models: DbModels) {}
}

export const initFaqItemQuestionModel = (sequelize: Sequelize) => {
  FaqItemQuestion.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      question: { type: DataTypes.STRING, allowNull: false },
      answer: { type: DataTypes.TEXT, allowNull: false },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      timestamps: true,
      defaultScope: {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    },
  );
};

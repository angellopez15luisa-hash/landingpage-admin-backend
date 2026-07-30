import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import { DbModels } from "../config/database.config";

export class ReviewOpinion extends Model<
  InferAttributes<ReviewOpinion>,
  InferCreationAttributes<ReviewOpinion>
> {
  declare public id: CreationOptional<number>;
  declare public name: string;
  declare public rating: number;
  declare public text: string;

  public static associate(models: DbModels) {}
}

export const initReviewOpinionModel = (sequelize: Sequelize) => {
  ReviewOpinion.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
      rating: { type: DataTypes.INTEGER, allowNull: false },
      text: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
    },
  );
};

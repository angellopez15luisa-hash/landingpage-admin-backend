import { DbModels } from "../config/database.config";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";

export class OrderStep extends Model<
  InferAttributes<OrderStep>,
  InferCreationAttributes<OrderStep>
> {
  declare public id: CreationOptional<number>;
  declare public number: string;
  declare public title: string;
  declare public description: string;

  public static associate(models: DbModels) {}
}

export const initOrderStepModel = (sequelize: Sequelize) => {
  OrderStep.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      number: { type: DataTypes.STRING, allowNull: false },
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
    },
  );
};

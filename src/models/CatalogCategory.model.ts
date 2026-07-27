import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import { DbModels } from "../config/database.config";

export class CatalogCategory extends Model<
  InferAttributes<CatalogCategory>,
  InferCreationAttributes<CatalogCategory>
> {
  declare public id: CreationOptional<number>;
  declare public text: string;

  public static associate(models: DbModels) {}
}

export const initCatalogCategoryModel = (sequelize: Sequelize) => {
  CatalogCategory.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      text: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
    },
  );
};

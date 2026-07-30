import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import { CatalogCategory } from "./CatalogCategory.model";
import { DbModels } from "../config/database.config";

export class CatalogItem extends Model<
  InferAttributes<CatalogItem>,
  InferCreationAttributes<CatalogItem>
> {
  declare public id: CreationOptional<number>;
  declare public title: string;
  declare public catalogCategoryId: number;
  declare public catalogCategory?: CatalogCategory;
  declare public price: number;
  declare public imagePath: string;
  declare public badge: string;

  public static associate(models: DbModels) {
    CatalogItem.belongsTo(models.CatalogCategory, {
      targetKey: "id",
      foreignKey: "catalogCategoryId",
      as: "catalogCategory",
    });
  }
}

export const initCatalogItemModel = (sequelize: Sequelize) => {
  CatalogItem.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      title: { type: DataTypes.STRING, allowNull: false },
      catalogCategoryId: { type: DataTypes.INTEGER, allowNull: false },
      price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      imagePath: { type: DataTypes.STRING, allowNull: false },
      badge: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
    },
  );
};

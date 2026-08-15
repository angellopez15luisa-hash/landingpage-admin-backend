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
  declare public isActive: boolean;
  declare public isDefault: boolean;

  public static associate(models: DbModels) {
    CatalogCategory.hasMany(models.CatalogItem, {
      sourceKey: "id",
      foreignKey: "catalogCategoryId",
      as: "catalogItems",
    });
  }
}

export const initCatalogCategoryModel = (sequelize: Sequelize) => {
  CatalogCategory.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      text: { type: DataTypes.STRING, allowNull: false },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      isDefault: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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

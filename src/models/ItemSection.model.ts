import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import { DbModels } from "../config/database.config";

export class ItemSection extends Model<
  InferAttributes<ItemSection>,
  InferCreationAttributes<ItemSection>
> {
  declare public id: CreationOptional<number>;
  declare public text: string;
  declare public href: string;
  declare public flagNavbar: boolean;
  declare public flagFooter: boolean;

  public static associate(models: DbModels) {}
}

export const initItemSectionModel = (sequelize: Sequelize) => {
  ItemSection.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      text: { type: DataTypes.STRING, allowNull: false },
      href: { type: DataTypes.STRING, allowNull: false },
      flagNavbar: { type: DataTypes.BOOLEAN, allowNull: false },
      flagFooter: { type: DataTypes.BOOLEAN, allowNull: false },
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

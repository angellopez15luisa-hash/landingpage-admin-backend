import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import { DbModels } from "../config/database.config";

export class Navbar extends Model<
  InferAttributes<Navbar>,
  InferCreationAttributes<Navbar>
> {
  declare public id: CreationOptional<number>;
  declare public textLogo: string;
  declare public hrefLogo: string;
  declare public textBtn: string;
  declare public hrefBtn: string;

  public static associate(models: DbModels) {
    
  }
}

export const initNavbarModel = (sequelize: Sequelize) => {
  Navbar.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      textLogo: { type: DataTypes.STRING, allowNull: false },
      hrefLogo: { type: DataTypes.STRING, allowNull: false },
      textBtn: { type: DataTypes.STRING, allowNull: false },
      hrefBtn: { type: DataTypes.STRING, allowNull: false },
    },
    { sequelize },
  );
};

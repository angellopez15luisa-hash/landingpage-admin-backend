import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import { DbModels } from "../config/database.config";

export class SocialLink extends Model<
  InferAttributes<SocialLink>,
  InferCreationAttributes<SocialLink>
> {
  declare public id: CreationOptional<number>;
  declare public name: string;
  declare public url: string;
  declare public icon: string;
  declare public flag: boolean;

  public static associate(models: DbModels) {}
}

export const initSocialLinkModel = (sequelize: Sequelize) => {
  SocialLink.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
      url: { type: DataTypes.STRING, allowNull: false },
      icon: { type: DataTypes.STRING, allowNull: false },
      flag: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
      sequelize,
    },
  );
};

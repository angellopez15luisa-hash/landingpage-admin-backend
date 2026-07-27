import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import { DbModels } from "../config/database.config";

export class FooterSection extends Model<
  InferAttributes<FooterSection>,
  InferCreationAttributes<FooterSection>
> {
  declare public id: CreationOptional<number>;
  declare public textLogo: string;
  declare public description: string;
  declare public phone: string;
  declare public iconPhone: string;
  declare public email: string;
  declare public iconEmail: string;
  declare public address: string;
  declare public iconAddress: string;
  declare public hours: string;
  declare public iconHours: string;

  public static associate(models: DbModels) {}
}

export const initFooterSectionModel = (sequelize: Sequelize) => {
  FooterSection.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      textLogo: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      phone: { type: DataTypes.STRING, allowNull: false },
      iconPhone: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      iconEmail: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
      iconAddress: { type: DataTypes.STRING, allowNull: false },
      hours: { type: DataTypes.STRING, allowNull: false },
      iconHours: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
    },
  );
};

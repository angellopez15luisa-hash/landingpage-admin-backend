import { Sequelize } from "sequelize";
import {
  initNavbarModel,
  Navbar,
  initItemSectionModel,
  ItemSection,
} from "../models";
import dotenv from "dotenv";

const dbConfig = require("../../db/config");
dotenv.config();

// Detectamos el entorno actual (por defecto 'development')
const env = process.env.NODE_ENV || "development";

// Extraemos la configuración correspondiente al entorno actual
const config = (dbConfig as any)[env];

if (!config) {
  throw new Error(`No se encontró la configuración para el entorno: ${env}`);
}

// Inicializamos Sequelize utilizando las variables y las opciones de zona horaria de tu config.js
const sequelize = new Sequelize(
  config.database || (process.env.DB_NAME as string),
  config.username || (process.env.DB_USER as string),
  config.password || (process.env.DB_PASSWORD as string),
  {
    host: config.host || process.env.DB_HOST,
    dialect: config.dialect || (process.env.DB_DIALECT as any) || "mysql",
    logging: config.logging !== undefined ? config.logging : false,
    timezone: config.timezone,
    dialectOptions: config.dialectOptions,
    define: {
      underscored: true, // <--- ¡AGREGA ESTO AQUÍ TAMBIÉN!
    },
  },
);

initNavbarModel(sequelize);
initItemSectionModel(sequelize);

const models = { Navbar, ItemSection };

Object.values(models).forEach((model: any) => {
  if (typeof model.associate === "function") {
    model.associate(models);
  }
});

export type DbModels = typeof models;

export { sequelize, Navbar, ItemSection };

export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("¡Conexión a la base de datos establecida exitosamente!");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
};

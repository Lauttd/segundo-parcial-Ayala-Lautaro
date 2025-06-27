import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

export const initDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("se establecio la conexion a la Base de datos.");
  } catch (error) {
    console.error("no se pudo conectar a la Base de datos:", error);
  }
};

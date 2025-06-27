import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const libros = async () => {
  sequelize.define(libros, {
    title: { type: DataTypes.STRING, allowNull: false, unique: true },
    author: { type: DataTypes.STRING, allowNull: false },
    pages: { type: DataTypes.STRING, allowNull: false },
    genre: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
  });
};

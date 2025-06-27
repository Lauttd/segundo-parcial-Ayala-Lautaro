import { sequelize } from "../config/database.js";
import { libros } from "../models/book.model.js";

const libros = ({ title, author, pages, genre, description } = req.body);



const crearLibro = 
const tituloExistente = await libros.findOne({
  where: { name: libros },
});

if (tituloExistente) {
  return res.status(404).json({
    message: `Ya existe un libro con este nombre`,
  });
}


//Que sea obligatorio

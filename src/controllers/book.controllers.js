import { sequelize } from "../config/database.js";
import { libros, libros, libros } from "../models/book.model.js";


//--------------------------------------------------------------------------------------------//
//Crear libro.
export const crearLibro = async(req, res) => {

    try {
    const libros = ({ title, author, pages, genre, description } = req.body)

//Comprueba si ya existe el titulo del libro.
const tituloExistente = await libros.findOne({
  where: { name: libros },
});

if (tituloExistente) {
  return res.status(404).json({
    message: `Ya existe un libro con este nombre`,
  });
}

//Que sea obligatorio.
if (title === undefined || author === undefined || genre === undefined || pages === undefined)
    return res.status(400).json({message: "no puede ser undefined, escriba algo porfavor!"})

//Comprueba q no este vacio.
if (title === "" || author === "" || genre === "" || pages === "")
    return res.status(400).json({message: "el campo no puede estar vacio, escriba algo porfavor!"})

//comprueba que no sea un numero negativo.
if (page < 0)
    return res.status(400).json({message: "no puede ser un numero negativo"})
} catch (error) {
        return res.status(404).json({message: "Error por parte del servidor"})
    }
}



//--------------------------------------------------------------------------------------------//
export const traerLibros = async(req, res) => {
    try {
        const libros = await libros.findByPk(req.params.id);
        if (libros) res.json(libros);
        else res.status(400).json({message: "libro no encontrado"})
    } catch (error) {
        return res.status(404).json({message: "Error por parte del servidor"})
    }
}


//--------------------------------------------------------------------------------------------//
export const traerLibrosId = async(req, res) => {
    try {
        const libros = await libros.findAll()
        res.json(libros);
    } catch (error) {
        return res.status(404).json({message: "Error por parte del servidor"})
    }
}


//--------------------------------------------------------------------------------------------//
export const actualizarLibro = async(req, res) => {
    try {
        const [updated] = await libros.update(req.body {
            where: { id: req.params.id},
        })
        if(updated){
            const actualizarLibro = await libros.findByPk(req.params.id);
            return res.status(200).json({message: "libro actualizado"})
        } else {
            res.status(400).json({message: "libro no encontrado"});
        }
    } catch (error) {
        return res.status(404).json({message: "Error por parte del servidor"})
    }
}


//--------------------------------------------------------------------------------------------//
export const eliminarLibro = async(req, res) => {
    try {
        const deleted = await libros.destroy({
            where: {id: req.params.id},
        });
        if [deleted]{
            res.status(200).json({message: "personaje eliminado"});
        }
        else res.status(400).json({message: "personaje no encontrado"})
    } catch (error) {
        return res.status(404).json({message: "Error por parte del servidor"})
    }
}

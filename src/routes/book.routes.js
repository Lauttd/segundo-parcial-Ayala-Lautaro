
import { crearLibro, traerLibros, traerLibrosId, actualizarLibro, eliminarLibro  } from "../controllers/book.controllers.js";
const Router=express.Router();
 
get.Router("/api/books:", traerLibros);
get.Router("/api/books/id:", traerLibrosId);
post.Router("/api/books:", crearLibro);
put.Router("/api/books/id:", actualizarLibro);
delete.Router("/api/books/id:", eliminarLibro);
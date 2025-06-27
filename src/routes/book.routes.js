import {
  crearLibro,
  traerLibros,
  traerLibrosId,
  actualizarLibro,
  eliminarLibro,
} from "../controllers/book.controllers.js";

const Router = express.Router();

Router.get("/api/books", traerLibros);
Router.get("/api/books/id:", traerLibrosId);
Router.post("/api/books:", crearLibro);
Router.put("/api/books/id:", actualizarLibro);
Router.delete("/api/books/id:", eliminarLibro);

export default Router;

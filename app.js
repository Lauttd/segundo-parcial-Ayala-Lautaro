import express from "express";
import dotenv from "dotenv";
import { initDB } from "./src/config/database.js";
import booksRoutes from "./src/routes/book.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(booksRoutes);

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`corriendo desde http://localhost:${PORT}`);
  });
});

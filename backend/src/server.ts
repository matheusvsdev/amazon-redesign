import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import categoriesRoutes from "./routes/categories";
import productsAmazon from "./routes/productsAmazon";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/products-amazon", productsAmazon);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));


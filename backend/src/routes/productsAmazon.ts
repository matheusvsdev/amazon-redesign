import { Router } from "express";
import { productsAmazon } from "../data";

const router = Router();

router.get("/", (req, res) => {
    console.log("Rota /products-amazon foi chamada");
  res.status(200).json(productsAmazon);
  console.log("Rota /products-amazon foi chamada");
});

export default router;
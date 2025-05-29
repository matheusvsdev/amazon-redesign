import { Router } from "express";
import { categories } from "../data";

const router = Router();

router.get("/", (req, res) => {
    console.log("Rota /categories foi chamada");
  res.status(200).json(categories);
  console.log("Rota /categories foi chamada");
});

export default router;
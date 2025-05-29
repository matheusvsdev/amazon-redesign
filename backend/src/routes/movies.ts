import { Router } from "express";
import { movies } from "../data";

const router = Router();

router.get("/", (req, res) => {
    console.log("Rota /movies foi chamada");
  res.status(200).json(movies);
  console.log("Rota /movies foi chamada");
});

export default router;
import { Router } from "express";
import { getGames } from "../services/steamGameService";

export const steamGameRouter = Router();

steamGameRouter.get("/games", async (req, res) => {
  const games = await getGames();
  res.json(games);
});

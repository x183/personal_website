import { Router } from "express";
import projList from "../../data/projects.json";

const spRouter = Router();

spRouter.get("/all", (req, res) => {
	res.status(200).json(projList);
});

export default spRouter;

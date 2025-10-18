import { Router } from "express";
import errorList from "../../data/errors.json";

const spErrorRouter = Router();

spErrorRouter.get("/all", (req, res) => {
	res.status(200).json(errorList);
});

export default spErrorRouter;

import { Router } from "express";
import notesList from "../../data/notes.json";

const spNoteRouter = Router();

spNoteRouter.get("/all", (req, res) => {
	res.status(200).json(notesList);
});

export default spNoteRouter;

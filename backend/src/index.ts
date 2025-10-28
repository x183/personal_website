import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import spErrorRouter from "./routers/spError";
import spNoteRouter from "./routers/notes";
import spRouter from "./routers/projects";

//For env File
dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
	res.status(200).send("Lol, you tried to acces me");
});
app.use("/sideprojects/error", spErrorRouter);
app.use("/sideprojects/notes", spNoteRouter);
app.use("/sideprojects", spRouter);
app.listen(port, () => {
	console.log(`Server is Fire at https://localhost:${port}`);
});

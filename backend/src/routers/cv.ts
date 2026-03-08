import { Router } from "express";
import jobsList from "../../data/jobs.json";
import projectList from "../../data/projects.json";
import educationList from "../../data/education.json";

const cvRouter = Router();

cvRouter.get("/all", (req, res) => {
  res
    .status(200)
    .json({ jobs: jobsList, projects: projectList, education: educationList });
});

export default cvRouter;

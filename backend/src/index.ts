import express from "express";
import { steamGameRouter } from "./routers/steamGamesRouter";
import { config } from "dotenv";
config();

const app = express();
app.use("/steam", steamGameRouter);
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

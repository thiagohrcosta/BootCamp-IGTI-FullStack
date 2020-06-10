import express from "express";
import {promises} from "fs";
import timesRouter from "./routes/times.js";

//const readFile = promises.readFile;
//const writeFile = promises.writeFile;

init();

const app = express();
app.use(express.json());

app.use("/times", timesRouter);

app.listen(3333, () => {
    console.log("API Running on port 3333.")
})
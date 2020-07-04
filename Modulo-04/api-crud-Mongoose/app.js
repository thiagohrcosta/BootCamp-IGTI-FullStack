//import express from 'express';
const express = require("express");

//import {movieRouter} from "./routes/movieRouter.js";
const routes = require("./routes/movieRouter.js");

//const movieRouter = require("./routes/movieRouter")

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () =>{
  console.log("API running on port 3333.")
})


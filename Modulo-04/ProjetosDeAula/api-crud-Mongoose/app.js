//import express from 'express';
const express = require("express");
const mongoose = require("mongoose");

//import {movieRouter} from "./routes/movieRouter.js";
const routes = require("./routes/movieRouter.js");

//const movieRouter = require("./routes/movieRouter")

// Conectando ao MongoDB pelo Mongoose
mongoose.connect("mongodb+srv://Thiago:bancodedadosigti@movieapi.z0kfu.mongodb.net/moviedb?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () =>{
  console.log("API running on port 3333.")
})


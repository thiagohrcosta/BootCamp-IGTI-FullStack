const express = require("express");
const movieModel = require('../models/movie');

const routes = express();

routes.get('/movie',async (req, res) => {
  
  try{
    const movie = await movieModel.find({});
    res.send(movie);
  }
  catch(err){
    res.status(500).send(err);
  }
});

module.exports = routes;


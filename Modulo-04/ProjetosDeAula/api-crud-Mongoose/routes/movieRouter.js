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

routes.post('/movie', async (req, res) => {
  try{
    const movie = new movieModel(req.body);
    await movie.save();

    res.send(movie);
  }
  catch(err){
    res.status(500).send(err);
  }
})

routes.delete('/movie/:id', async(req, res) =>{
  try{
    const movie = await movieModel.findOneAndDelete( {_id: req.params.id});
    if(!movie){
      res.status(404).send("Can´t find this ID on our Database");
    }
    res.status(200).send();
  }
  catch(err){
    res.status(500).send(err);
  }

})

routes.patch('/movie/:id', async(req, res) =>{
  try{
    const movie = await movieModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body, 
      {new: true} 
    );
    res.send(movie);
  }
  catch(err){
    res.status(500).send(err);
  }
})

module.exports = routes;


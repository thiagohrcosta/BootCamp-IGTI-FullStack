const mongoose = require('mongoose');

// Criando modelo
const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    validade(value){
      if(value < 0 && value > 10) throw new Error("Value must be between 0 and 10.")
    }
  },
  gender: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true,
    validade(value){
      if(value <= 1900 && value >= 2030) throw new Error("Year must be between 1900 and 2030")
    }    
  },
  trailer: {
    type: String,
  },
  coverBox: {
    type: String,
    required: true
  },
  mainActor: {
    type: String,
    required: true
  },
  supportActor: {
    type: String
  }
});

//definindo modelo da coleção
const movieModel = mongoose.model("movies", movieSchema, "movies");

module.exports = movieModel;
//const movie = mongoose.model("movie");
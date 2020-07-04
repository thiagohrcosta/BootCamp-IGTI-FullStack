const mongoose = require('mongoose');

// Criando modelo
const movieSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  rating: {
    type: Number,
    require: true,
    validade(value){
      if(value < 0 && value > 10) throw new Error("Value must be between 0 and 10.")
    }
  },
  gender: {
    type: String,
    require: true
  },
  year: {
    type: Number,
    require: true,
    validade(value){
      if(value <= 1900 && value >= 2030) throw new Error("Year must be between 1900 and 2030")
    }    
  },
  trailer: {
    type: String,
  },
  coverBox: {
    type: String,
    require: true
  },
  mainActor: {
    type: String,
    require: true
  },
  supportActor: {
    type: String
  }
});

//definindo modelo da coleção
const movieModel = mongoose.model("movies", movieSchema, "movies");

module.exports = movieModel;
//const movie = mongoose.model("movie");
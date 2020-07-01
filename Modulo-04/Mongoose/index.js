//import mongoose from 'mongoose';
const mongoose = require('mongoose');

// Conectando ao MongoDB pelo Mongoose
await mongoose.connect("mongodb+srv://Thiago:bancodedadosigti@movieapi.z0kfu.mongodb.net/moviedb?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Criando modelo
const movieSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  rating: {
    type: Double,
    require: true
  },
  gender: {
    type: String,
    require: true
  },
  year: {
    type: Number,
    require: true
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
mongoose.model("moviedb", movieSchema);
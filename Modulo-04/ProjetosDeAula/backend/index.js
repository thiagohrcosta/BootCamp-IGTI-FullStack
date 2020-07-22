//import mongoose from 'mongoose';
const mongoose = require('mongoose');

// Conectando ao MongoDB pelo Mongoose
mongoose.connect("mongodb+srv://Thiago:bancodedadosigti@movieapi.z0kfu.mongodb.net/moviedb?retryWrites=true&w=majority", {
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
    type: Number,
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
mongoose.model("movie", movieSchema);

const movie = mongoose.model("movie");

new movie ({
  title: "Demolition Man",
  rating: 6.7,
  gender: "Action",
  year: 1993,
  trailer: "https://www.youtube.com/watch?v=0B5v6QZ5R3g",
  coverBox: "https://m.media-amazon.com/images/M/MV5BMDBmNDhjOTYtZWVlMC00YzUwLWIyZjEtYzFjMWM5OTdiZDJkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
  mainActor: "Sylvester Stallone",
  supportActor: "Wesley Snipes"
}).save()
  .then( () => console.log("Documento inserido com sucesso")
  );

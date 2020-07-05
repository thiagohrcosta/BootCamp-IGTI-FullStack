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
  title: "Raiders of the Lost Ark",
  rating: 8.4,
  gender: "Action",
  year: 1981,
  trailer: "https://www.youtube.com/watch?v=XkkzKHCx154",
  coverBox: "https://images-na.ssl-images-amazon.com/images/I/61H2YD-bubL._AC_.jpg",
  mainActor: "Harrison Ford",
  supportActor: "Karen Allen"
}).save()
  .then( () => console.log("Documento inserido com sucesso")
  );

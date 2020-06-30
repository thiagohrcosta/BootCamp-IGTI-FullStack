//import mongoose from 'mongoose';
const mongoose = require('mongoose');

// Conectando ao MongoDB pelo Mongoose
await mongoose.connect("mongodb+srv://Thiago:bancodedadosigti@movieapi.z0kfu.mongodb.net/moviedb?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});




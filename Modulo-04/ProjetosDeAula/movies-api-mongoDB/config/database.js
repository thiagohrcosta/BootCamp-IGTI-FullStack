import mongoose from 'mongoose';

await mongoose.connect('mongodb://localhost/movieapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

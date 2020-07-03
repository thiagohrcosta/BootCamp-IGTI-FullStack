import express from 'express';

const app = express();

export {app};

app.get('/movie',async (req, res) => {
  res.send("Teste");
});



const express = require("express");
const routes = express();

routes.get('/movie',async (req, res) => {
  res.send({result: "Validado!!!"});
});

module.exports = routes;


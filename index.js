const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`Assignment page!`);
});

app.get("/products/all", (req, res) => {
  JSON.stringify(req.query) === "{}"
    ? res.send(`Products, ${req.headers.page}, ${req.headers.sort}, ${req.headers.order}`)
    : res.send(`Products, ${req.query.sort}`);
});

app.get("/products/:id-:size-:color", (req, res) => {
  res.send(`Product, ${req.params.id}, ${req.params.size}, ${req.params.color}`);
});

app.get("/products/:id", (req, res) => {
  res.send(`Product, ${req.params.id}`);
});

app.listen(3000);

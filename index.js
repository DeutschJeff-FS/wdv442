const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`Assignment page!`);
});

// How does "all" equal to a set of given queries?
app.get("/products/all", (req, res) => {
  res.header("");
  res.send(`Products page!`);
});

app.get("/products/:id", (req, res) => {
  res.send(`Product, ${req.params.id}`);
});

app.get("/products/:id-:size-:color", (req, res) => {
  res.send(`Product, ${req.params.id}, ${req.params.size}, ${req.params.color}`);
});

app.listen(3000);

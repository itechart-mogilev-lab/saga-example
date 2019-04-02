const Router = require("express").Router();

const data = [
  { id: 1, description: "Product #1", price: 13.2, count: 55 },
  { id: 2, description: "Product #2", price: 4, count: 5522 },
  { id: 3, description: "Product #3", price: 113.2, count: 43 },
  { id: 4, description: "Product #4", price: 11.6, count: 14 },
  { id: 5, description: "Product #5", price: 13.3, count: 5 }
];

Router.get("/", (_, res) => {
  res.send(data);
  res.end();
});

Router.get("/:id", (req, res) => {
  const product = data.find(p => p.id == req.params.id);
  res.send(product);
  res.end();
});

module.exports = Router;

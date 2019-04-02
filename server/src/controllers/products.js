const Router = require("express").Router();

const data = [
  {
    id: 1,
    description: "Product #1",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed vestibulum sapien, nec fringilla urna. In hac habitasse platea dictumst. Donec sed elit at odio condimentum volutpat",
    price: 13.2,
    count: 55
  },
  {
    id: 2,
    description: "Product #2",
    longDescription: "Morbi sagittis, felis non feugiat feugiat",
    price: 4,
    count: 5522
  },
  {
    id: 3,
    description: "Product #3",
    longDescription:
      "Nullam molestie sagittis sem, vel dapibus nibh porta ac. Nam malesuada sed diam eget lobortis. Pellentesque vestibulum volutpat turpis nec dictum. ",
    price: 113.2,
    count: 43
  },
  {
    id: 4,
    description: "Product #4",
    longDescription:
      "Nulla facilisi. Etiam ornare sem sit amet augue molestie, at volutpat velit condimentum. Donec libero lectus, tristique suscipit pretium ac, ornare sed nunc. Vivamus condimentum ipsum justo. Mauris risus purus, pretium id arcu et, pellentesque interdum neque. Nullam pellentesque lacus",
    price: 11.6,
    count: 14
  },
  {
    id: 5,
    description: "Product #5",
    longDescription: "Curabitur eu mauris vel",
    price: 13.3,
    count: 5
  }
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

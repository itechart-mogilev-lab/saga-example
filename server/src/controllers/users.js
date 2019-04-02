const Router = require("express").Router();

Router.get("/current", (_, res) => {
  res.send({
    givenName: "Ruslan",
    familyName: "Kutynko",
    avatarUrl: "/",
    orders: [
      {
        id: 1,
        productId: 1,
        description: "Product #1",
        price: 13.2,
        date: new Date()
      },
      {
        id: 2,
        productId: 2,
        description: "Product #2",
        price: 4,
        date: new Date()
      },
      {
        id: 3,
        productId: 3,
        description: "Product #3",
        price: 113.2,
        date: new Date()
      }
    ]
  });
  res.end();
});

module.exports = Router;

const Router = require("express").Router();

Router.use("/products", require("./products"));
Router.use("/users", require("./users"));

module.exports = Router;

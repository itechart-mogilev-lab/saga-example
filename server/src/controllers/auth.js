const Router = require("express").Router();

Router.post("/login", (req, res) => {
  if (req.body.login.indexOf("test") > -1) {
    res
      .send({
        token: "some token",
        user: {
          givenName: "Ruslan",
          familyName: "Kutynko"
        }
      })
      .end();
  } else {
    res.sendStatus(400).end();
  }
});

module.exports = Router;

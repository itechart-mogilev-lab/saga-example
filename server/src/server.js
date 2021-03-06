const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors());
app.use(require("body-parser").json());
app.use("/api", require("./controllers"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server started");
});

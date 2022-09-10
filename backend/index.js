const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.json("this response is from express api");
});

app.listen(4000, () => {
  console.log("app is listening at port 4000");
});

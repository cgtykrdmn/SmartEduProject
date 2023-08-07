const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res
  .status(200)
  .send("Index Page");
});

const port = 3000;
app.listen(port, () => {
  console.log(`${port} has been started.`);
});


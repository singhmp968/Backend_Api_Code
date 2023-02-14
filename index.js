const express = require("express");
const app = express();
const passport = require("passport");
const port = 8000;

// uses express route
const db = require("./config/mongoose");
app.use(express.static("./assets"));
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`server is running on port ${port}`);
});

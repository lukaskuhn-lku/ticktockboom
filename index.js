var express = require("express");
var app = express();

app.use("/main", express.static("public"));

app.listen(5000, () => {
  console.log("Server listening on Port 5000");
});

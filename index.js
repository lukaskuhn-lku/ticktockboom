var express = require("express");
var app = express();

app.use("/main", express.static("public"));

app.listen(8080, () => {
  console.log("Server listening on Port 80");
});

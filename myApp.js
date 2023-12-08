let express = require("express");
let app = express();
// console.log("Hello World");
app.get("/", function (req, res) {
  let viewsPath = __dirname + "/views/index.html";
  res.sendFile(viewsPath);
});

let publicPath = __dirname + "/public";
app.use("/public", express.static(publicPath));
app.get("/json", function (req, res) {
  let o = {message:"Hello json"}
  if(process.env.MESSAGE_STYLE == "uppercase") {
    o["message"] = "HELLO JSON"
  }
  res.json(o);
});
module.exports = app;

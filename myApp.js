let express = require("express");
let app = express();
// console.log("Hello World");

app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get("/now", function(req, res, next){
  req.time = new Date().toString()
  next()
}, function(req, res) {
  res.time = {"time":req.time}
  res.send(res.time)
})

app.get("/", function (req, res) {
  let viewsPath = __dirname + "/views/index.html";
  res.sendFile(viewsPath);
});

let publicPath = __dirname + "/public";
app.use("/public", express.static(publicPath));
app.get("/json", function (req, res) {
  let o = { message: "Hello json" };
  if (process.env.MESSAGE_STYLE == "uppercase") {
    o["message"] = "HELLO JSON";
  }
  res.json(o);
});

module.exports = app;

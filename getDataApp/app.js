var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;

var jsonParser = bodyParser.json();

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");


app.get("/", function (req, res) {

    res.render("index");

});

var rulesObj = [
    { ruleName: "Must be 5 characters" },
    { ruleName: "Must not be used elsewhere" },
    { ruleName: "Must be cool" }
];

app.get("/api/showRules", function (req, res) {
    res.json(rulesObj);
});

app.post("/api/addRule", jsonParser, function (req, res) {
    rulesObj.push({ ruleName: req.body.newRule });
    res.json(rulesObj);
});

app.listen(port);

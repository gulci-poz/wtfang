var express = require("express");

var app = express();
var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");


app.get("/", function (req, res) {

    res.render("index");

});


app.get("/api/rules", function (req, res) {

    var rulesObj = [
        { rulename: "Must be 5 characters" },
        { rulename: "Must not be used elsewhere" },
        { rulename: "Must be cool" }
    ];

    res.json(rulesObj);

});

app.listen(port);

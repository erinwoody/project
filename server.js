const express = require("express");
const path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use("/", express.static(path.join(__dirname, 'public')))
app.use("/:other", express.static(path.join(__dirname, 'public')))

app.listen(8000, function () {
    console.log("running on port 8000");
})
/**
 * Created by lukedowell on 7/29/15.
 */
var express = require("express");
var path = require("path");
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get("/", function(req, res, next) {
    res.sendFile(path.join(__dirname, "./public/views/index.html"));
});

app.listen(app.get('port'), function() {
    console.log("Listening on port: " + app.get('port'));
});
var express = require("express");
var app = express();
var bodyParser = require("bodyparser")

var PORT = process.env.PORT || 3636

var appParser = bodyParser.json()

app.listen(PORT, function(){
    console.log("Listening on port" + PORT)
});


survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

$("#surveyElement").Survey({model: survey});
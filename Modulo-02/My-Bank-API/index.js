var express = require("express");
var fs = require("fs");

var app = express();

app.use(express.json());

app.get("/", function(req, res){
    res.send("Hello World")

});

app.post("/account", (req, res) => {
    let params = req.body;

    fs.appendFile("accounts.json", JSON.stringify(params), err => {
        console.log(err);
    });
    
    res.send("post account");
});

app.listen(3333, function(){
    console.log("API Started");
});
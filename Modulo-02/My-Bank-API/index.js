var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("Hello World")

});

app.post("/account", (req, res) => {
    console.log("Post Account")
})

app.listen(3333, function(){
    console.log("API Started");
});
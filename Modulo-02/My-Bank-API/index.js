var express = require("express");
var fs = require("fs");

var app = express();

app.use(express.json());

app.post("/account", (req, res) => {
    let params = req.body;

    fs.readFile("accounts.json", "utf8", (err, data) =>{
        console.log(err);

        try{
            let json = JSON.parse(data);
            console.log(json);
            
            res.send("post account");
        }
        catch(err){
            res.send("erro");
        }
    });

    /*
    fs.appendFile("accounts.json", JSON.stringify(params), err => {
        console.log(err);
    });
    */
});

app.listen(3333, function(){
    console.log("API Started");
});
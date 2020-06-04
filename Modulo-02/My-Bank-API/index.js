var express = require("express");
var fs = require("fs");

var app = express();

app.use(express.json());

app.post("/account", (req, res) => {
    let account = req.body;

    fs.readFile("accounts.json", "utf8", (err, data) =>{
        if(err){
            try{
                let json = JSON.parse(data);
                account = { id: json.nextId++, ...account };               
                json.accounts.push(account);

                fs.writeFile("accounts.json", JSON.stringify(json), err => {
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.end();
                    }
                 });
            }
            catch(err){
                res.status(400).send({ errpr: err.message });
            }            
        }
        else{
            res.status(400).send({ error: err.message });
        }

    });
});

app.listen(3333, function(){

    try{
        fs.readFile("accounts.json", "utf8", (err, data) =>{
           if(err){
               const initialJson = {
                    nextId: 1,
                    accounts: []
               };
               fs.writeFile("accounts.json", JSON.stringify(initialJson), err => {
                   console.log(err);
               });
           }
        });

    }
    catch (err){
        console.log(err);
    }
    console.log("API Started");
});
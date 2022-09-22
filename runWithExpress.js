/* require() is a built-in function to include external modules that exist in separate files */
var express = require("express");

const {response, json} = require("express");

/* express() utiliser pour créer une application basée sur le frameWork express*/
var app = express();

/* pour la gestion des routes on peut utiliser la fonction get*/
app.get("/" /* Mettez rien par défaut */,function (req, resp){

    /* Cette fonction doit être exécutée une fois j'exécute cette route-là*/
    resp.setHeader("content-type", "text/html");

    resp.send("<h1>Congratulation ie017, Express is running</h1>");
});
app.get("/student/:id", (req, resp)=>{
    resp.setHeader("content-type", "application/json");
    let informations = {
        id: req.params.id, name: "ie017", email: "elorfissam1@gmail.com"
    }
    resp.send(JSON.stringify(informations)); /* JSON.stringify pour convertir l'objet js informations vers json format*/
});

app.listen(8888, ()=>{
    console.log("server started"); /* Afficher ce message une fois le serveur est démarré*/
});

/* On passe à travailler avec typescript */
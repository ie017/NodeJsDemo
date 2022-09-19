/*Avec ce fichier js on va voir comment peut démarrer une app node js */
console.log("Run Application Demo");
/*Dans la terminale on crée : node run.js, et dans ce cas le commande node lance
* le moteur v8 de rendu javascript pour execute les instructions dans run.js */

/*C:\Users\ie\Desktop\NodeJsApp>node run.js
Run Application Demo
*/

/* Maintenant on intéresse par l'utilisation de syntaxe js classique pour démarrer
* un serveur http*/

/* Importer le module http et url*/
var http = require("http");
var url = require("url");
var queryString = require("querystring");
const https = require("https");

var httpServer = http.createServer(function (req, resp){
    /* req.url donne l'url mais en format string */
    /* parse pour dire un chaine de caractères devient etre un objet javascript*/
    /* pathname pour retourner un objet js se forme de path*/
    var path = url.parse(req.url).pathname;
    console.log('path='+path);

    /* Pour récupérer les paramètres de l'url */
    var params=queryString.parse(url.parse(req.url).query);
    var nom = params['nom'];
    console.log("Nom = "+ nom);

    /* Pour envoi la response avec le status 200, et au meme temps avoir des résultats
    * de type html */
    resp.writeHead(200, {'content-type': 'text/html'});

    /* Envoi la response de type html */
    resp.end("<h3>Votre nom est : "+nom+"</h3>");
});

// Démarrer le serveur http sur le port 8887
httpServer.listen(8887,()=>{
    console.log("OK : 200")
});
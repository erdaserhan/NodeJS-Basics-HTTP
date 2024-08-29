const http = require('http');
const Url = require('url').URL
 
 
function demarrageServeur() {
    const serveur = 'http://localhost';
    const port = 8888;
 
    var monServeur;   
    
    monServeur = http.createServer(requeteRecue).listen(port);
    console.log("Démarrage du serveur sur le port" + port);
 
    function requeteRecue (request, response){
        let laRequete = request.url;
        console.log('La requête est : ' + laRequete);
        let urlComplete = new Url(laRequete, serveur + ":" + port);
 
        let laPageDemandee = urlComplete.href;
        let laQueryString = urlComplete.search;
        let leChemin = urlComplete.pathname;
        let lePort = urlComplete.port;
        let leHost = urlComplete.hostname;
 
 
 
        response.writeHead(200, {'Content-Type':"text/html; charset=utf-8"});
        response.write(
            '<!DOCTYPE html>' +
            '<html>'+
            '<head>'+
            '<meta charset="UTF-8">'+
            '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
            '<title>Document</title>'+
            '<link rel="stylesheet" href="formulaire_flex.css">'+
            '</head>'+
            '<body>'+
            '<h1>Résultat avec NodeJS</h1>'+
            '<p>La requéte reçu est <em>:' +laRequete+ '</em></p>'+
            '<p>La requéte reçu est <em>:' +laPageDemandee+ '</em></p>'+
            '<p>La requéte reçu est <em>:' +leHost+ '</em></p>'+
            '<p>La requéte reçu est <em>:' +lePort+ '</em></p>'+
            '<p>La requéte reçu est <em>:' +laQueryString+ '</em></p>'+
            '<p>La requéte reçu est <em>:' +leChemin+ '</em></p>'+
            '</body>'+
            '</html>'
        );
        response.end();
    }  
 
    
}
 
exports.demarrerExemple = demarrageServeur;
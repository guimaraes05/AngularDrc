var http = require('http');
var url = require('url');


var server = http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type':'text/html'});
    

    if(request.url === "/"){
        response.write("<h1>Bem vindo</h1>")
    }else if(request.url === "/sobre"){
        response.write("<h1>Sobre</h1>")
    }else{
        response.write("<h1>Página não exite</h1>")
    }

    response.end();
});

server.listen(3000, function(){
    console.log("Primero Server");
});
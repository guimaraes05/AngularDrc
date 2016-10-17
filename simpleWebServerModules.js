var http = require('http');



var server = http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type':'text/html'});

    var circulo = require('./circulo.js');
    response.write("Um circulo de raio 4 tem area de " + circulo.area(4));
    response.end();
});

server.listen(3000, function(){
    console.log("Primero Server");
});
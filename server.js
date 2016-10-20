var express = require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs("mongodb://localhost:27017/escola", ["alunos"]);

db.on('error', function (err) {
    console.log('database error', err)
});
 
db.on('connect', function () {
    console.log('database connected')
});


    
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/alunos', function (req, res) {
  
    db.alunos.find(function (err, docs) {
        res.send(docs); 
    });
 

});

app.get('/aluno/:name', function (req, res) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  
  var reg = RegExp(req.params.name, "i");

  var query = {name:reg};

  db.alunos.find(query, function (err, docs) {
    res.send(docs); 
  });
 

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
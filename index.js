var express = require('express')
const util = require('util');
const request = require('request');
const { stringify } = require('querystring');
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//Teste chamada api get
app.get('/', function (req, res) {
  request('https://dog.ceo/api/breeds/image/random', { json: true }, (err, ress, body) => {
    if (err) { return console.log(err); }
     // console.log(body.message);
      res.send('<img style="width:500px" src="'+body.message+'" >');
     
  });
})





//Teste chamada api Post
request.post({
  headers: {'content-type' : 'application/json'},
  url:     'https://reqres.in/api/users',
  body:    JSON.stringify({
    "name": "morpheus",
    "job": "leader"
})
}, function(error, response, body){
  console.log("Body: "+body);


  });








//Teste api Get
app.get('/banana', function (req, res) {
  var produtos = {"Nome":"Banana","Marca":"Doriana","Modelo":"Amarela com marcas"};
  res.json(produtos);
})


//Teste api Post com Body
app.post('/acesso', function (req, res) {
  res.send(":"+req.body.user);
})



//Teste api Get com parametro
app.get('/modeloCar', function (req, res) {
  var user_id = req.query.id;
  res.send(user_id);
})






app.listen(8000, function () {
  console.log('Running...');
})


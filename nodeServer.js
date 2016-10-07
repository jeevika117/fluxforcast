var express = require('express');
var app = express();
var http = require("http");
app.get('/', function (req, res) {
         var callback = function(response) {
    var data = '';
    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
     data += chunk;
    });

    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
     // console.log(data);
        res.header('Access-Control-Allow-Origin','*');
        res.setHeader('Content-Type', 'application/json');
       res.json(data);
     }.bind(this));
    }.bind(this);
    http.get(
    {
        host: 'proxy2.wipro.com',
        port: 8080,
        path: 'http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=688a0aafe1976ffa245ea02fbc93296b'
    },callback).on('error', function(e) {
   console.log("Got error: " + e);
    })
  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
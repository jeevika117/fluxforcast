import dispatcher from "../dispatcher";
var http = require('http');    
module.exports = function load(func){
     http.get("http://localhost:3000",function(response){
       var data = '';
        response.on('data', function(chunk) {
          // append chunk to your data
          data += chunk;
        });

        response.on('end', function() {
        let finalData = JSON.parse(JSON.parse(data));
         func({
             data:finalData.city.name,
             weather:finalData.list
         });
        });
     });

}


var http = require('http'); //1
http.createServer(function(request,response){
    //send the http header
    //http status 200
    response.end("First Event Node API Communication");
}).listen(8081);

console.log(" Server running at the http port 127.0.0.1 8081");


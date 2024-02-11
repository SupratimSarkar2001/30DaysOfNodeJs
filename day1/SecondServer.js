var http= require('http');

http.createServer(function(req, res){
 res.writeHead(200, {'Content-Type': 'text/html'});//content Type is HTML
 res.write("Hello Text From the Server");
 res.end();
}).listen(8080)
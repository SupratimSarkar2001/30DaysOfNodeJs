var http= require('http');
var fs= require('fs');

http.createServer(function(req, res){
  fs.readFile('index.html', function(err, data){
   if(err){
    res.writeHead(404, {'Content-Type': 'text/html'});
    return res.end("404 Not Found");
   }
   else{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
   }
  })
}).listen(8080);
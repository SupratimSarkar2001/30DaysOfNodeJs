var http= require('http');

http.createServer(function(req, res){
  console.log("Server is Created!");
  res.end("Server is Closed!");
}).listen(8080)
var http= require('http');

http.createServer(function(req, res){
 var reqURL=req.url;
 res.write(reqURL);
 res.end();
}).listen(8080)
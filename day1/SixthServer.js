var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('hello.pdf', function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end("There is Some Error");
        } else {
            res.writeHead(200, { 'Content-Type': 'application/pdf' });
            res.end(data);
        }
    });
}).listen(8080);

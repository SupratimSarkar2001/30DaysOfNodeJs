var fs = require('fs');

var content = fs.readFileSync('myfile.txt');

console.log(content.toString());

console.log("Hello World")
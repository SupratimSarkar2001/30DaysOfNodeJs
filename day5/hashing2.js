const { fail } = require("assert");
var crypto = require("crypto");
 var fs = require("fs");

var hash = crypto.createHash("sha256");

var file_data=fs.ReadStream("text.txt");

file_data.on('data',(chunk)=>{
  hash.update(chunk);
})


file_data.on('end',()=>{
 var final_data=hash.digest("base64url");
 console.log(final_data)
})

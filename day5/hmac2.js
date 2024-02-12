const { fail } = require("assert");
var crypto = require("crypto");
 var fs = require("fs");

var hamc = crypto.createHmac("sha256","gydgsghdhsdhshdhsgdhsghdhgshgdshgdhgsghdghsdghsghdgh");

var file_data=fs.ReadStream("text.txt");

file_data.on('data',(chunk)=>{
 hamc.update(chunk);
})


file_data.on('end',()=>{
 var final_data=hamc.digest("base64url");
 console.log(final_data)
})
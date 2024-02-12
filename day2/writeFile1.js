var fs = require("fs");

fs.writeFile("myfile.txt","Hello World",function(err){
 if(err){
  console.log(err);
 }
 else{
  console.log("File created");
 }
})
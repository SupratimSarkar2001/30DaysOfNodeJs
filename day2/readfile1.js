var fs=require("fs");

fs.readFile("myfile.txt",function(err,data){
 if(err){
  console.log(err);
 }
 else{
  console.log(data.toString());
 }
})

console.log("Hello World")
var fs=require('fs');

fs.appendFile("myfile.txt","Hello World",function(err){
 if(err){
  console.log("There is Some err")
 }
 else{
  console.log("File Appended");
 }
})
var fs=require('fs');

fs.unlink("myfile.txt",function(err){
 if(err){
  console.log("There is some err")
 }
 else{
  console.log("File Deleted");
 }
})
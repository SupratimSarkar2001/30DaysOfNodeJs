const express= require('express');
const app = express();
const fs = require('fs');
const readStream=  fs.createReadStream("sample.txt");
const writeStream=  fs.createWriteStream("sample4.txt");
app.get("/",(req,res)=>{
  readStream.pipe(writeStream);
   
 readStream.on("end",()=>{
   console.log("File read successfully");
 })
 res.send("File copied successfully");
})

app.listen(3000, () => {
 console.log('Server running on port 3000');
})
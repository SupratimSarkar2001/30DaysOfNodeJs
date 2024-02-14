const express= require('express');
const app = express();
const fs = require('fs');
const readStream=  fs.createReadStream("sample.txt");
app.get("/",(req,res)=>{
 readStream.on("data",(chunk)=>{
   res.send(chunk.toString());
 })

 readStream.on("end",()=>{
   console.log("File read successfully");
 })
})

app.listen(3000, () => {
 console.log('Server running on port 3000');
})
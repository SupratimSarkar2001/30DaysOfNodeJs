const express = require('express');
const { createServer } = require('http');
const path = require('path');
const { Server } = require('socket.io');// Server from socket.io

const app = express(); //Initializing express app
const server = createServer(app); // supply express app to http server
const io = new Server(server,
 {
  connectionStateRecovery: {}
 }
 ); // supply http server to socket.io
app.get("/",(req,res)=>{
 res.sendFile(path.join(__dirname,"index.html"));
})

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("chat message", (msg) => {
   console.log("message: " + msg);
   io.emit("chat message", msg);// send message to all clients
  })
})

server.listen(3000,()=>{
    console.log("server is running on port 3000");
})
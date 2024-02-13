var express = require('express');

const app = express();
app.use(express.json()); 

const users =[
 {
   "id":1,
   "name":"John",
   "age":30
 },
 {
   "id":2,
   "name":"Mary",
   "age":25
 }
]

app.get("/api/hello",(req,res)=>{
  res.send("Hello World");
})

app.get("/api/users",(req,res)=>{
  res.send(users);
})

app.get("/api/users/:id",(req,res)=>{
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if(!user) res.status(404).send("User not found");
  res.send(user);
})

app.post("/api/users", (req, res) => {
 const newUser = {
     id: users.length + 1,
     name: req.body.name,
     age: req.body.age
 };
 users.push(newUser);
 res.status(201).send(newUser);
});

app.put("/api/users/:id", (req, res) => {
 const id = parseInt(req.params.id);
 const user = users.find(u => u.id === id);
 if(!user) res.status(404).send("User not found");
 if(req.body.name) user.name = req.body.name;
 if(req.body.age) user.age = req.body.age;
 res.send(user);
})

app.delete("/api/users/:id", (req, res) => {
 const id = parseInt(req.params.id);
 const user = users.find(u => u.id === id);
 if(!user) res.status(404).send("User not found");
 const index = users.indexOf(user);
 users.splice(index, 1);
 res.send(user);
})
app.listen(3000, () => {
 console.log('Listening on port 3000');
})

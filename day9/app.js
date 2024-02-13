const express = require('express');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserSchema = require('./schema');
const connectDB = require('./utils');

const verifyToken =require("./auth");


const app= express();
app.use(express.json());

connectDB();

app.post('/login',async (req, res) => {
 try{
  const user = await UserSchema.findOne({email: req.body.email})
  if(!user){
   return res.status(400).json({message: 'NO USER FOUND'})
  }
  const validPassword = bycrypt.compareSync(req.body.password, user.password);
  if(!validPassword){
   return res.status(400).json({message: 'WRONG CREDENTIALS'})
  }
  const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
  res.status(200).json({message: 'LOGIN SUCCESSFUL', token: token})
 }
 catch(err){
  console.log(err);
  res.status(500).json({message: 'LOGIN FAILED'})
 }
})

app.post('/register',async (req, res) => {
 try{
  const hashedPassword = bycrypt.hashSync(req.body.password, 8);
  const user = new UserSchema({
   name: req.body.name,
   email: req.body.email,
   password: hashedPassword
  })
  const newuser = await user.save();
  res.status(201).json({message: 'REGISTRATION SUCCESSFUL'})
 }
 catch(err){
  console.log(err);
  res.status(500).json({message: 'REGISTRATION FAILED'})
 }
})

app.get('/protected', verifyToken, (req, res) => {
   res.json({message: 'PROTECTED ROUTE'})
})


app.listen(3000, () => {
 console.log('Server started on port 3000');
})


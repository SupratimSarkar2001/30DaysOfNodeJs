const express=require('express');

const app= express();
app.use(express.json());

const Product = require('./schema');
const connectDB = require('./utils');

connectDB();

app.get('/',async (req,res)=>{
   try{
     const products = await Product.find();
     res.status(200).json(products)
   }
   catch(err){
    res.status(500).json({error:err.message})
   }
})

app.post('/',async (req,res)=>{
 try{
   const product = await Product.create(req.body);
   res.status(201).send(product)
 }
 catch(err){
  res.status(500).json({error:err.message})
 }
})

app.get("/:id", async (req, res) => {
 try{
   const product= await Product.findById(req.params.id);
   res.status(200).json(product)
 }
 catch(err){
  res.status(500).json({error:err.message})
 }
})

app.put("/:id", async (req, res) => {
 try{
   const productId= req.params.id;
   await Product.findByIdAndUpdate(productId, req.body);
   const product= await Product.findById(productId);
   res.status(200).json(product);
 }
 catch(err){
  res.status(500).json({error:err.message})
 }
})

app.delete("/:id", async (req, res) => {
 try{
   const productId= req.params.id;
   await Product.findByIdAndDelete(productId);
   res.status(204).send("deleted Sucessfully");
 }
 catch(err){
  res.status(500).json({error:err.message})
 }
})
app.listen(3000, () => console.log('Server started on port 3000'))
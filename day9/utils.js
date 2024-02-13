const mongoose = require('mongoose');

require('dotenv').config();

const connectDB = async ()=>{
  try{
    const conn= mongoose.connect(process.env.MONGO);
    console.log(`MongoDB Connected`);
  }
  catch(err){
   console.log(err);
   process.exit(1);
  }
}

module.exports = connectDB
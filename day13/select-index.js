const mysql = require('mysql');

const con = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "",
 database: "demodb"
});

con.connect((err)=>{
 if(err){
  throw err;
 }

 console.log("Connected!");
 var sql = "SELECT * FROM customers";

 con.query(sql, (err, result)=>{
  if(err){
   throw err;
  }
  console.log(result);
 })
})
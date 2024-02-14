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
 var sql = "INSERT INTO customers (name, address) VALUES ('Kand H', 'kannad 37')";

 con.query(sql, (err, result)=>{
  if(err){
   throw err;
  }
  console.log("1 record inserted");
 })
})
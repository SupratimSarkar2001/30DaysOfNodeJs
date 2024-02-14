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
 var sql = "UPDATE customers SET address = 'kannad 37' WHERE name = 'Kand H'";

 con.query(sql, (err, result)=>{
  if(err){
   throw err;
  }
  console.log(result.affectedRows + " record(s) UPDATED");
 })
})
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
 var sql = "DELETE FROM customers WHERE address = 'kannad 37'";

 con.query(sql, (err, result)=>{
  if(err){
   throw err;
  }
  console.log(result.affectedRows + " record(s) deleted");
 })
})
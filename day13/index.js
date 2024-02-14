const mysql= require('mysql');

const con = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "",
 database: "demodb"
});

con.connect((err) => {
 if(err){
  console.log(err);
 }
 else{
 console.log("Connected to MySQL!");
 }
})
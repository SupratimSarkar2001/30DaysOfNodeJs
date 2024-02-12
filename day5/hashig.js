var crypto= require("crypto");

var hash=crypto.createHash("md5");

var data="Hello World";

var hashed_data=hash.update(data);

var final_data=hashed_data.digest("hex");

console.log(data+ " : " + final_data);
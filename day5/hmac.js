var crypto= require("crypto");

var data="I am a good boy";

// var secrect1 = "aaabbbcccdddAAABBBCCCDDD"
var secrect2="655464446546546546464sdgsggsyfdysfd"

var hmac=crypto.createHmac("md5",secrect2);

var final_data=hmac.update(data).digest("hex");

console.log(data+" : "+final_data)


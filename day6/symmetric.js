var crypto = require("crypto");

const data="Hello World";

const key = crypto.randomBytes(32);
// console.log(key.toString());

const cipher = crypto.createCipheriv("aes-256-ctr", key , "1234567812345678");

const encrypted = cipher.update(data, "utf8", "hex")+cipher.final("hex");

console.log("EN: ",encrypted)

const decipher = crypto.createDecipheriv("aes-256-ctr", key , "1234567812345678");

const decypted = decipher.update(encrypted, "hex", "utf8")+decipher.final("utf8");

console.log("DE: ",decypted)
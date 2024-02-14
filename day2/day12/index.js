const fs= require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('input.txt.gz');

readStream.pipe(gzip).pipe(writeStream);
console.log("Gzip Completed");
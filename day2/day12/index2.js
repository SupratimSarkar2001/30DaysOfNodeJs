const zlib = require('zlib');
const fs = require('fs');

const gzip = zlib.createUnzip();

const readStream = fs.createReadStream('input.txt.gz');
const writeStream = fs.createWriteStream('input2.txt');

readStream.pipe(gzip).pipe(writeStream)

console.log("Unzip Completed")
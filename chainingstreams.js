const fs = require("fs");
const zlib = require('zlib');

fs.createReadStream('inputs.txt')
    .pipe(zlib.createGzip())
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('output.txt'));
console.log("File Compressed, decompressed and written to a file");

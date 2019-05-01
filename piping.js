const fs = require("fs");


const readerStream = fs.createReadStream('inputs.txt');
const writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);
console.log("Program Ended");

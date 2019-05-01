const fs = require('fs');
const data = 'This is a test to an output stream';

const writerStream = fs.createWriteStream('output.txt');
writerStream.write(data, 'UTF8');
writerStream.end();

writerStream.on('finish', function(){
    console.log('Write Completed!');
});

writerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("Program Ended");

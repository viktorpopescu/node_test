const http = require('http');

const options = {
    host: 'localhost',
    port: '8081',
    path: '/inputs.txt'
};

const callback = function(response) {
    let body = '';
    response.on('data', function(data){
        body+=data;
    });
    response.on('end', function(){
        console.log(body);
    });
};

console.log('being request');
const request = http.request(options, callback);
console.log('end request');
request.end();

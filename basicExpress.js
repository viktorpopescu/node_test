const express = require('express');
const app = express();

app.get('/', function(request, response){
    response.send('Hello Word');
});

const server = app.listen(8081, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});

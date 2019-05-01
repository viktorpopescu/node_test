const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
});

app.post('/', function(req, res){
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
});

app.delete('/del_user', function(req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send("Hello DELETE");
});

app.get('/list_user', function(req, res){
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
});

app.get('/ab*cd', function(req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
});

let server = app.listen(8081, function(){
    const host = server.address().address;
    const port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});

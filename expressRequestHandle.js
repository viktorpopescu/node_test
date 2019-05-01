const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
    res.sendFile(__dirname + '/' + 'index.htm');
});

app.post('/process_post', urlencodedParser , function (req, res) {
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

let server = app.listen(8081, function(){
    let host = server.address().address;
    let port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});

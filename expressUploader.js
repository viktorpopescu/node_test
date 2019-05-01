const express = require('express');
const app = express();
const fs = require("fs");

let bodyParser = require('body-parser');
const multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).any());//('file'));

app.get('/index2.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index2.htm" );
});

app.post('/file_upload', function (req, res) {
    console.log(req.files[0]);
    console.log(req.files[0].filename);
    console.log(req.files[0].path);

    let file = __dirname + "/" + req.files[0].originalname;

    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(file, data, function (err) {
            if( err ) {
                console.log( err );
            } else {
                var response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].filename
                };
            }

            console.log( response );
            res.end( JSON.stringify( response ) );
        });
    });
});

let server = app.listen(8081, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});

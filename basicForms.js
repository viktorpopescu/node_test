const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
let upload = multer();
let app = express();

app.get('/', function(req, res){
    res.render('form');
});

app.set('view engine', 'pug'); // set to use PUG
app.set('views', './views'); // set folder for PUG files to render.

app.use(bodyParser.json()); // decode json
app.use(bodyParser.urlencoded({extended: true})); // decode url encoded
app.use(upload.array()); // parse form data
app.use(express.static('public')); // make folder "public" as static folder

app.post('/', function(req, res){
    console.log(req.body);
    res.send("received your request!");
});

app.listen(3000);

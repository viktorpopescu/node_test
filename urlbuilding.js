const express = require('express');
let app = express();

app.use(function(req,res,next){
    console.log('Middleware1 running here');
    next();
});

app.use(function(req,res,next){
    console.log('Middleware2 running here');
    next();
});

app.get('/:topic/:subtopic', function(req, res){
    res.send('-->>>' + req.params.topic + " ---->>>" + req.params.subtopic);
});

app.get(/\/(([A-Y])(.*?)(\d+))/, function(req, res, next){
    res.send('-->>>' + req.params[1]+'.'+req.params[2]+'.'+req.params[3] + '    ---> matches my pattern');
    console.log('get running');
    next();
});

app.use(function(req,res, next){
    console.log('Middleware3 running here');
    next();
});

app.get('/:topic', function(req, res){
    res.send('-->>>' + req.params.topic);
});

app.get('/', function(req, res){
    res.send('-->>> NADA HERE');
});

app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
});




app.listen(3000);

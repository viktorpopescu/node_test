const express = require('express');
let app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', function(req, res){
    // res.cookie('name2', 'express2').send('cookie set');
    res.cookie('doomed', 'in 15 sec', {maxAge: 15000}).send('cookie set');
});

app.get('/testcookies', function(req, res){
    console.log(req.cookies);
    res.send('list of cookies in the server log');
});

app.get('/clearcookie/:foo', function(req,res){
    res.clearCookie(req.params.foo).send('deleted'+req.params.foo);
});

app.get('/addcookie/:foo/:bar', function(req,res){
    res.cookie(req.params.foo, req.params.bar);
    res.send('added: '+req.params.foo + " = "+ req.params.bar);
});

app.listen(3000);

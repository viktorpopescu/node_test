const express = require('express');
let app = express();
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/first_template', function(req,res){
    // res.render('first_view',{
    //     name: "TutorialsPoint",
    //     url:"http://www.tutorialspoint.com",
    //     fancyname:"the most awesome tutorial resource ever",
    //     user: {name: "Victor"}
    // });
    res.render('content');
});

app.listen(8080);

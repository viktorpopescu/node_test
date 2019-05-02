const express = require('express');
let app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const multer = require('multer');
let upload = multer();

app.set('view engine', 'pug'); // set to use PUG
app.set('views', './views'); // set folder for PUG files to render.

app.use(bodyParser.json()); // decode json
app.use(bodyParser.urlencoded({extended: true})); // decode url encoded
app.use(upload.array()); // parse form data
app.use(express.static('public')); // make folder "public" as static folder

mongoose.connect('mongodb://localhost/my_db');



// before defining any route
let personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});

let Person = mongoose.model("Person", personSchema);

app.get("/person", function(req,res){
    res.render('person');
    console.log('get received');
});

app.get('/people', function(req, res){
    Person.find(function(err, response){
        res.json(response);
    });
});

app.post('/person', function(req, res){
    console.log('post received');
    var personInfo = req.body; //Get the parsed information

    if(!personInfo.name || !personInfo.age || !personInfo.nationality){
        res.render('show_message', {
            message: "Sorry, you provided worng info", type: "error"});
    } else {
        var newPerson = new Person({
            name: personInfo.name,
            age: personInfo.age,
            nationality: personInfo.nationality
        });

        newPerson.save(function(err, Person){
            if(err)
                res.render('show_message', {message: "Database error", type: "error"});
            else
                res.render('show_message', {
                    message: "New person added", type: "success", person: personInfo});
        });
        Person.find(function(err, response){
            console.log(response);
        });

        Person.find({name: "ddd", age: 22},
            function(err, response){
                console.log(response);
            });
    }
});

app.get('/sadee', function(req,res){
    Person.update({nationality:"sadee"}, {age: 22},{multi: true}, function(err, response){
        console.log(response);
        res.json(response);
    });
});

app.get('/del20', function(req,res){
    Person.remove({age: 22}, function(err, response){
        console.log(response);
        res.json(response);
    });
});

app.put('/people/:id', function(req, res){
    Person.findByIdAndUpdate(req.params.id, req.body, function(err, response){
        if(err) res.json({message: "Error in update "+req.params.id});
        res.json(response);
    });
});
app.listen(3000);

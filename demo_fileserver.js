const http = require('http');
const url = require('url');
const fs = require('fs');

const mongourl = "mongodb://localhost:27017/";


const formidable = require('formidable');
const MongoClient = require('mongodb').MongoClient;

http.createServer(function (req, res) {
    // const q = url.parse(req.url, true);
    const word = decodeURIComponent(req.url);
    console.log(req.url);
    console.log(word);


    MongoClient.connect(mongourl, function (err, db) {
        if (err) throw err;
        const dbo = db.db("German");
        dbo.collection("Words").find({German: word.slice(1)}, {projection: {_id: 0}}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            console.log(result[0]);
            // console.log(JSON.parse(result[0]));
            res.writeHead(200, {"Access-Control-Allow-Origin": "*"});
            console.log(JSON.stringify(result[0]));
            res.write(JSON.stringify(result[0]));
            db.close();
            return res.end();
        });
    });


}).listen(8080);

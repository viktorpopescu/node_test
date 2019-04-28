const http = require('http');
const mongourl = "mongodb://localhost:27017/";
const fs = require('fs');

const formidable = require('formidable');
const MongoClient = require('mongodb').MongoClient;

http.createServer(function (req, res) {
    if (req.url === '/searchword') {

        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            console.log(fields.word);
            MongoClient.connect(mongourl, function (err, db) {
                if (err) throw err;
                const dbo = db.db("German");
                dbo.collection("Words").find({German: fields.word}).toArray(function (err, result) {
                    if (err) throw err;
                    console.log(result);
                    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                    res.write('German: ' + result[0].German);
                    res.write('<p></p>');
                    res.write('English: ' + result[0].English);
                    db.close();
                    return res.end();
                });
            });
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        // res.write('form starts here <p>');
        res.write('<form action="searchword" method="post" enctype="multipart/form-data" accept-charset="UTF-8">');
        // res.write('<p>input starts here </p>');
        res.write('<input type="text" name="word"><br>');
        // res.write('<p>submit input starts here </p>');
        res.write('<input type="submit">');
        // res.write('<p>form ends here</p>');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);

const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
http.createServer(function (req, res) {
    if (req.url === '/fileuploadq') {
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            const oldpath = files.filetouploadz.path;
            console.log(oldpath);
            const newbasepath = 'C:\\Users\\popescus\\Desktop\\Desktop Active\\AngularWork2\\node_test\\';
            const newpath =  newbasepath+ files.filetouploadz.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        // res.write('form starts here <p>');
        res.write('<form action="fileuploadq" method="post" enctype="multipart/form-data">');
        // res.write('<p>input starts here </p>');
        res.write('<input type="file" name="filetouploadz"><br>');
        // res.write('<p>submit input starts here </p>');
        res.write('<input type="submit">');
        // res.write('<p>form ends here</p>');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);

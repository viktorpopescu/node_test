const http = require('http');
const url = require('url');
const uc = require('upper-case');
const events = require('events');
const eventEmitter = new events.EventEmitter();

const scream = function () {
    console.log('I hear a scream!');
};
eventEmitter.on('scream', scream);
eventEmitter.emit('scream');
http.createServer(function (req, res) {
    const q = url.parse(req.url, true);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc(q.pathname));
    res.write('<p></p><button onclick="alert(\'bang\')"> pam </button>');
    res.end();
}).listen(8080);

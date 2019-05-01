const express = require('express');
let app = express();

let things = require('./things.js');
app.use('/things', things);

app.listen(8080);

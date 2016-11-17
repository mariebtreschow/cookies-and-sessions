const express = require('express');

var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());
app.use(express.static('public'));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
   console.log('Web listening to port 3000');
});

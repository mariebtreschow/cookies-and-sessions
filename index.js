const express = require('express'),
      cookieParser = require('cookie-parser');


var app = express();

app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
   console.log(req.cookies);
});

app.listen(3000, () => {
   console.log('Web listening to port 3000');
});

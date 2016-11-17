const express = require('express'),
      pug = require('pug'),
      session = require('express-session');


var app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));


app.get('/', (req, res) => {
   var sess = req.session
   if (sess.views) {
     sess.views++
     res.setHeader('Content-Type', 'text/html')
     res.write('<p>views: ' + sess.views + '</p>')
     res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
     res.end()
   } else {
     sess.views = 1
     res.end('welcome to the session demo. refresh!')
   }
});

app.listen(3000, () => {
   console.log('Web listening to port 3000');
});

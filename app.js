var express = require('express');
var app = express();

app.set('viewengine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
    res.send('OK');
})

app.listen(3000);
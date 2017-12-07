'use strict';

var path = require('path');

var express = require('express');
var helmet = require('helmet');

var app = express();
var PORT = process.env.port || 3000;

app.use(helmet({
    dnsPrefetchControl: {
        allow: true
    },
    frameguard: {
        action: 'deny'
    }
}));
app.use(express.static('public'));

app.get('/', function(request, response) {
    response.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(PORT, function() {
    console.info(`Listening on port: ${PORT}`);
});

app.use(function(request, response, next) {
    response.status(404).send('404 Not Found');
});

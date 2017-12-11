var path = require('path');

var express = require('express');
var helmet = require('helmet');

var app = express();
var PORT = process.env.port || 3000;

// app.use(cors());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Accept, Authorization, Content-Length, Content-Type, Origin, X-Requested-With'
    );

    next();
});

app.use(helmet({
    dnsPrefetchControl: {
        allow: true
    },
    frameguard: {
        action: 'deny'
    }
}));
app.use(express.static('public'));
app.use(express.static('node_modules/chart.js/dist'));
app.use(express.static('node_modules/angular-chart.js/dist'));
app.get('/', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(PORT, function () {
    console.info(`Listening on port: ${PORT}`);
});

app.use(function (request, response, next) {
    response.status(404).send('404 Not Found');
});

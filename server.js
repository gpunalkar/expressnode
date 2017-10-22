'use strict';
var express = require('express');
var app = express();
var port = process.env.PORT || 8001;


app.get('/', function (req, res) {
    res.send('Hello Express');
});

app.listen(port, function () {
    console.log('Starting Server 8001');
});
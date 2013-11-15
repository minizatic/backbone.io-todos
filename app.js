var express = require('express');
var backboneio = require('backbone.io');

var app = express();
app.use(express.static(__dirname));

var server = app.listen(3000);
console.log('http://localhost:3000/');

var messages = backboneio.createBackend();
messages.use(require("./mongoStore.js")("backbone", "todos"));

backboneio.listen(server, { messages: messages });

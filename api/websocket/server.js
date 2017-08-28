var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require('path');

app.use(express.static(path.join(__dirname, '../')));

io.on('connection',function(client){
	client.on('server',function(message){
		var newMess = JSON.parse(message)
		io.emit('ser',newMess);
	})
})

http.listen(1703);
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require('path');

app.use(express.static(path.join(__dirname, '../')));

io.on('connection',function(client){

	client.on('server',function(message){
<<<<<<< HEAD
		var newMess = JSON.parse(decodeURI(message));

		console.log(newMess);
		io.emit('ser',newMess);
		
=======
		// var newMess = JSON.parse(message)
		message = encodeURIComponent(message)
		io.emit('ser',message);
		console.log(message);
>>>>>>> 965072ad3bf275e053cc220bb6baa313236e8d1d

	})

})

http.listen(1703);
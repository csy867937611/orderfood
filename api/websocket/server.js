var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require('path');

app.use(express.static(path.join(__dirname, '../')));

io.on('connection',function(client){

	client.on('server',function(message){
		// var newMess = JSON.parse(message)
		/*message = encodeURIComponent(message)*/
		io.emit('ser',message);
	});
	client.on('waiter',function(offer){
			console.log(offer)
		io.emit('offer',{status:true})
	});
	client.on('order',function(order){
		var _order = JSON.parse(decodeURI(order));
		_order.map((item, idx)=>{
			item.status = '待接单'
		})
		io.emit('clientOrder',encodeURI(JSON.stringify(_order)))
	});
	client.on('cooking',function(schedule){
		console.log(schedule);
		io.emit('kitchen',schedule);
	})

})

http.listen(1703);
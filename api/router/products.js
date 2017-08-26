var bodyParser = require('body-parser');

//新引入的模块；
var url =require("url");
var urlencodedParser = bodyParser.urlencoded({ extended: true })
var sql = require('../mysql/sql_products');

exports.register = function (app){
	//全部菜品查询；
	app.post("/query",urlencodedParser, function(request,response){

		//请求数据库；
		sql.query("products", request.query, function(data){
			//返回数据到页面；
			response.send({status: true,data: data});
		})
	});

	//菜品分类查询；
	app.post('/getCategory', urlencodedParser, function(request, response){
		sql.getCategory('products', request.body, function(data){
			response.send(data);
		})
	})
	//get请求查询所有菜名
	app.get('/product',function(req,res) {
		sql.query('products',req.query,function(data) {
			res.send({status:true,data:data});
		})
	})
	//get请求分页查询
	app.get('/page',function(req,res) {
		sql.page('products',req.query,function(data) {
			res.send(data)
		})
	})
}
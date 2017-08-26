//引入相应模块
var mysql = require("mysql");

//定义数据库
var sql = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"orderfood"
});

//连接数据库
sql.connect();

module.exports = {
	query:function(table,data,callback){

		//查询数据库
		sql.query("select * from products",function(err,results,fields){
			callback(results)
		});
	},
	getCategory:function(table,data,callback){
		var condition = "select * from products where category = ?";
		//查询数据库
		sql.query( condition, [data.category], function(err, results, fields){
			callback({status: true,data: results})
		})
	}
}


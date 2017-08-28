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
	query: function(table, data, callback){		
		sql.query("select * products", function(err,results,fields){
			callback(results)
		})
	}
}
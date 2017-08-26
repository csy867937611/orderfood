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
	},
	//菜品分页加载；
	page:function(table,data,callback){
		var total = 0;
		var _condition = "select * from products";
		sql.query(_condition, function(err,res){
			total = res.length;
		});

		var obj = {page:1,qty:20};
		var targetObj = {};
		Object.assign(targetObj,obj,data);
		var page = targetObj.page - 1;
        var qty  = Number(targetObj.qty);
        var mysql  = 'select * from products limit '+page*qty+','+qty;
        //select * from products limit (pageNode-1)*qty,qty
        sql.query(mysql,function(err,res){
        	if(!err){
        		callback({status:true,message:'获取成功',data:res,total:total,page:targetObj.page,qty:targetObj.qty});
        	}else{
        		callback({status:false,message:'获取失败',data:null,total:null,page:null,qty:null});
        	}
        })
	},
}


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

	//模糊查询；
	keyword: function(table,data,callback){
		var condition = "SELECT * FROM products WHERE CONCAT(name, ID, category, description ) LIKE  '%"+data.keyword+"%' ";
		//查询数据库
		sql.query( condition, function(err, results, fields){
			callback({status: true,data: results})
		})
	},

	//录入菜品
	addProduct:function(table,data,callback) {
		console.log('新增菜品data',data)
		var condition = 'INSERT INTO products(ID,name,description,category,nowPrice,oldPrice,discount,time,sales,isNew,isFamous,imgurl,remain,limit1,isSellOut,pass100,pass200,promotion)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
		var params = [
			data.ID,
			data.name,
			data.description,
			data.category,
			data.nowPrice,
			data.oldPrice,
			data.discount,
			data.time,
			data.sales,
			data.isNew,
			data.isFamous,
			data.imgurl,
			data.remain,
			data.limit1,
			data.isSellOut,
			data.pass100,
			data.pass200,
			data.promotion
		];
		sql.query(condition,params,function(err,res) {
			if(!err) {
				callback({status:true,message:'添加成功',date:res})
			}else {
				console.log(err)
				callback({status:false,message:'添加失败',date:null})
			}    
		})
	},
	//删除菜品
	removeProduct:function(table,data,callback) {
		console.log('删除菜单',data)
		//所有数据数量
		var total = 0;
		var _condition = "select * from products";
		sql.query(_condition, function(err,res){
			total = res.length;
		});

		var obj = {page:1,qty:20};
		var targetObj = {};

		Object.assign(targetObj,obj,data)
		var page = Number(targetObj.page - 1);
        var qty  = Number(targetObj.qty);
        console.log('data',data)
        console.log('obj',targetObj)
        var sql1 = 'delete from products where ID = ? ';
        var sql2 = 'select * from products limit '+page*qty+','+qty;
        var sqlparam = [data.id];
        //select * from products limit (pageNode-1)*qty,qty
        

		sql.query(sql1,sqlparam,function(err,res){
			if(!err){
				sql.query(sql2,function(err,res){
        			callback({status:true,message:'删除成功',data:res,total:total,page:targetObj.page,qty:targetObj.qty});
        		})
			}else{
				console.log(err)
				callback({status:false,message:'删除失败',data:null,total:null,page:null,qty:null});
			}
			
		})
	},
	//更新菜品
	updateProduct:function(table,data,callback) {
		//console.log('更新data',data)
		var editData = data
		console.log('11111',editData)
		data.table = 'products';
		//所有数据数量
		var total = 0;
		var _condition = `select * from products`;
		sql.query(_condition, function(err,res){
			total = res.length;
		});

		var obj = {page:1,qty:10};
		var targetObj = {};

		Object.assign(targetObj,obj,data)
		var page = Number(targetObj.page - 1);
        var qty  = Number(targetObj.qty);

        //可配置其他数据库

		if(data.table == 'products'){
			var sql1 = `
				UPDATE products SET
					name 	     = '${editData.name}',
					description  = '${editData.description}',
					category     = '${editData.category}',
					nowPrice 	 = '${editData.nowPrice}',
					oldPrice     = '${editData.oldPrice}',
					discount 	 = '${editData.discount}',
					time 	     = '${editData.time}',
					sales        = '${editData.sales}',
					isNew        = '${editData.isNew}',
					isFamous     = '${editData.isFamous}',
					imgurl       = '${editData.imgurl}',
					remain       = '${editData.remain}',
					limit1       = '${editData.limit1}',
					isSellOut    = '${editData.isSellOut}',
					pass100      = '${editData.pass100}',
					pass200      = '${editData.pass200}',
					promotion    = '${editData.promotion}'
				WHERE ID         = ${Number(editData.ID)}`;
		}
		/*var sql2 = 'select * from supplier limit '+page*qty+','+qty;*/
		/*var sql2 = `select * from ${data.table} limit ${page} * ${qty},${qty}` 错误*/
		var sql2 = `select * from ${data.table} limit ${page * qty},${qty}`
		sql.query(sql1,function(err,res) {
			if(!err){
				sql.query(sql2,function(err,res) {
					if(!err){
						callback({status:true,message:'更新成功',data:res,total:total,page:data.page})
					}else{
						callback({status:false,message:'更新失败',data:null,total:null,page:null})
					}
					
				})
			}else{
				console.log(err)
			}
		});
	}
}


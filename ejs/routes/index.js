var express = require('express');
var router = express.Router();
var model = require('../model/user.js');
var models = require('../model/score.js');






/* 登陆接口 */
router.post('/login', function(req, res, next) {
	  var data=req.body
	  console.log(data) 	
      	console.log(data.username)
      	console.log(data.password)
//	var obj = {			//创建一个对象								
//						"result":1,
//						"message":"请求成功",
//						"code":200						
//		}
	model.find(function(err, doc){
	  if(err)throw err
		console.log(doc)
	
		res.send(doc);
	})
	
//	if (data.username==44&&data.password==55) {
//		res.send(JSON.stringify(obj));
//	} else {
//		res.send("输入错误, 请重新输入");
//	}
});

//注册接口
router.post('/reg', function(req, res, next) {
	var data=req.body
	
	var modelObj = new model(data);
	modelObj.save(function (err,doc) {
		if(err)throw err
	//	console.log(JSON.stringify(doc))
		res.send(JSON.stringify(doc));
	})
	
	res.send("注测成功");
//	if (data.names==44&&data.pwd==55) {
//		res.send("注测成功");
//	}else {
//		res.send("注册失败");
//	}
	
});

//菜单接口
router.get('/menu', function(req, res, next) {
	 var obj = {											
		 "result":1,
		 "message":"请求班级信息成功",
		 "data":{
		 	"id":"1",
		 	"list":[
			 		{"name":"排行榜"},
			 		{"name":"业务能力"},
			 		{"name":"管理能力"},
			 		{"name":"专业能力"},
			 		{"name":"技术能力"}							 									 	
			 	] 			
		 }					
	}
	res.send(JSON.stringify(obj));		
});

//用户名单接口
router.post('/user', function(req, res, next) {
	var data=req.body
//		  	var obj = {										
//						 "result":1,
//						 "message":"请求班级信息成功",
//						 "data":{
//						 "id":"1",
//					   "list":[
//							 		{"name":"花花"},
//							 		{"name":"丽丽"},
//							 		{"name":"娟娟"},
//							 		{"name":"看看"}
//						 	 ]			
//						 }					
//				}	
		model.find(function(err, doc){
	  if(err)throw err
	//	console.log(doc)
		res.send(doc);
	})
	
});

//接收分数结果数接口
router.post('/score', function(req, res, next) {
	var data=req.body
	

	var scoreObj = new models(data);

	scoreObj.save(function (err,doc) {
		if(err)throw err
	///	console.log(doc)
		res.send(doc);
	})		

});


router.post('/getScore', function(req, res, next) {
	var data=req.body

		models.find(function(err, doc){
	  if(err)throw err
	  console.log("获取成功")
		console.log(doc)
		console.log("得到了")
		res.send(doc);
	})
});

router.get('/11', function(req, res, next) {

});
  
module.exports = router;

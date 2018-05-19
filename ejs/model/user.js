var mongoose = require("mongoose");//引用mongoose模块
//连接数据库 协议：//地址：端口/数据库名
mongoose.connect("mongodb://localhost:27017/test");
//使用mongoose模块的Schema模型
var Schema = mongoose.Schema;
//实例化一个模型，初始化字段和类型
var UserSchema = new Schema({
	name:String,
	pass:String,
	itemid:String
	
})

var myModel=mongoose.model('score',UserSchema)

//导出模型UserSchema，scores，
module.exports = myModel




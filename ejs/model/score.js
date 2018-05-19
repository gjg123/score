var mongoose = require("mongoose");//引用mongoose模块
//连接数据库 协议：//地址：端口/数据库名
mongoose.connect("mongodb://localhost:27017/test");
var db = mongoose.connection;
//使用mongoose模块的Schema模型
var Schema = mongoose.Schema;
//实例化一个模型，初始化字段和类型
var ScoreSchema = new Schema({
	
	scoreG:String,
	scoreY:String,
	itemid:String

	






})

var ScoreModel=mongoose.model('result',ScoreSchema)

//导出模型UserSchema，表名为users，
module.exports = ScoreModel
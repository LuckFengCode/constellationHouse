//使用define定义模块
//第一个参数是依赖模块
define(["jquery"],function($){
	return{
		//就是获取数据 不做其他的
		"getlist":function(callback){
			//这里的路径是根据html文件做参考
			$.get("json/lcx.json",{},function(res){
				//调用回调函数  传入 data 数据
				callback(res.data);
			},"json");
		}
	}
});
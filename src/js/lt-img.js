define(["jquery"],function($){
	return{
		//就是获取数据 不做其他的
		"getlist":function(callback){
			//这里的路径是根据html文件做参考
			$.get("data-lt/lt.json",{},function(data){
				//调用回调函数  传入 data 数据
				//console.log(data.data);
				callback(data.data);
			},"json")
		}
	}
})
define(["jquery"],function($){
	function main($dom,url,callback){
		$.get(url,{},function(html){
			$dom.append(html);
			callback && callback.apply($dom);
		},"text");
	}
	return main;
});

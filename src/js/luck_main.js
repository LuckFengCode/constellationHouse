require(["jquery"],function($){
	var all;
	function getData(consName,d_span,d_width){
		$.get('/api',{
			//向服务器发送的数据
			url : "http://web.juhe.cn:8080/constellation/getAll",
			consName:consName,
			type : "today",
			key : "eb35e534165b1ba9796130ea4029954c"
		
		},function(result){
			var data0 = result.summary;
			all = result.all;
			d_span.html(data0)
			d_width.css("width",all);
		},"json");
	}
	
	var get_li = $(".luck_ul li");
	
	for(var i=0;i<get_li.length;i++){
		var get_consName = get_li.eq(i).find(".fc2 a").html();
		var d_span = get_li.eq(i).find(".more span");
		var d_width = get_li.eq(i).find(".star_m em");
		getData(get_consName,d_span,d_width);
		
	}

});
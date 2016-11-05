require(["lt-img","jquery","./lt-animate"],function(img,$,animate){
	img.getlist(function(data){
		var html = "";
		data.forEach(function(item,i){
			html += "<li class='sw-li swiper-slide' data-swiper-slide-index='"+item.index+"'>"
			html +=	"<a href='#'>"
			html += "<img src='"+item.src+"' alt='"+item.alt+"' />"
			html += "<span>"+item.alt+"</span>"
			html +=	 "</a></li>"
		});
		$(".sw-box").html(html);
		//让 dom 结构完全加载到页面后再执行动画处理
		//setTimeout(function(){
			//让这个函数的执行顺序放到最后
			animate();
		//},0);
	});
});



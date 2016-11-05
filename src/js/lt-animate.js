define(["swiper","jquery"],function(Swiper,$){
	function main(){
		var content1 = $('#indexlunbo .swiper-container');
		var mySlide = new Swiper(content1, {
		    //速度，执行动画完成的时间
		    speed: 300,
		    //加载完后 默认显示的索引
		    initialSlide : 0,
		    // 自动播放   这里是1 秒钟播放一次
			autoplay : 1000,
			autoplayDisableOnInteraction:false,
			freeMode : true,
			freeModeMomentum : true,
			freeModeSticky : true,
			loop : true,
			slidesPerView : 'auto',
			loopedSlides : 8,
		   // slidesPerView : "auto", //自动分列
			centeredSlides : false
		});
	}
	
	return main;
});

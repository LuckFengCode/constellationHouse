define(["swiper","jquery"],function(Swiper,$){
	function main(){
		var content2 = $('#indexMenu .swiper-container');
		var mySwiper = new Swiper(content2, {
		    //速度，执行动画完成的时间
		    speed: 300,
		    //加载完后 默认显示的索引
		    initialSlide : 0,
			freeMode : true,
			freeModeMomentum : true,
			freeModeSticky : true,
			slidesPerView : 'auto',
			centeredSlides : false
		});
	}
	
	return main;
});
define(['jquery','swiper'],function($,Swiper){
	function slide(){
		var content = $('#other .swiper-container');
		var mySwiper = new Swiper(content,{
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
	return slide;
});

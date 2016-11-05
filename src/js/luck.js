

//回到顶部
$(window).scroll(function () {
				
	if ($(window).scrollTop() > 0) {
		
		$("#btn_top1").css("display","block");
		
		$("#btn_top1").on("tap",function(){
//			alert(1)
			document.documentElement.scrollTop = document.body.scrollTop =0;
		})

	}else{
		$("#btn_top1").css("display","none");
	}
});


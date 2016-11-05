function common(){
	

	$(function(){
		
		function setFontSize(){
			// 设计稿 640px
			var width = document.documentElement.clientWidth;
			var fontSize = (width / 640) * 100;
			document.getElementsByTagName("html")[0].style.fontSize = fontSize + "px";
		}
		$(window).on("resize",setFontSize);
		setFontSize();
		
		//侧栏
		function openSideNav(){
			$('#sideNav').css('right','0');
			$('.wrap').css('left','-2rem');
			$('#header').css('left','-2rem');
		}
		function closeSideNav(){
			$('#sideNav').css('right','-2rem');
			$('.wrap').css('left','0');
			$('#header').css('left','0');
		}
		$('.openMenu').on('tap',function(){
			if($('#sideNav').css('right')=="0px"){
				closeSideNav();
			}else{
				openSideNav();
			}
		})
		$("#sideNav ul").children().on('tap',function(){
			closeSideNav();
		})
		$('#sideNav em').on('tap',function(){
			closeSideNav();
		})
		$('#sideNav span').on('tap',function(){
			closeSideNav();
		})
		
		//回顶
		$(window).scroll(function(){
			if(document.documentElement.scrollTop||document.body.scrollTop == 0){
				$("#backTop").css('display','none');
			}else{
				$("#backTop").css('display','block');
			}
		})
		$("#backTop").on('tap',function(){
			closeSideNav();
			document.documentElement.scrollTop = document.body.scrollTop = 0;
			//console.log(scroll);
		})
		
		//换皮肤
		$('#sideNav span').on('tap',function(){
			$('#header').toggleClass('headerBlue');
			$('#sideNav').toggleClass('sideNavBlue');
			$('#sideNav span').toggleClass('spanBlue');
			//console.log($('#sideNav span'));
		})
		
		
		
	})
	
}
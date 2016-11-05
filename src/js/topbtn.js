define(["jquery"],function($){

	return {

		topbtn:function(){

			$(window).scroll(function(){

			//console.log($(window).scrollTop())
			var top = $(window).scrollTop();
			if (top==0) {
				$("#topbtn").css("display","none")
			}else{
				$("#topbtn").css("display","block")
			}

			})
		},

		topreturn:function(){

			$("#topbtn").click(function(){
			
				$(window).scrollTop(0);
			})



		}






	}

})
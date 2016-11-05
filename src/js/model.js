define(["jquery"],function($){

	return {

		model:function(){

			$("footer").eq(0).find("span").click(function(){
				$("footer").eq(0).find("span").css("color","#666")
				$(this).css("color","#65b0df")
			})


		}
	}
})
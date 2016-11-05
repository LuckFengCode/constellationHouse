 function index1(){

		require(["jquery","./x-animate"],function($,xanimate){
			xanimate();
			$('.all-constellation ul li').click(function(){
				//alert($(this).index())
				var data = $(this).data().name;
				//console.log(data)
				var arr = data.split(";")
				var id = arr[0]-1;
				//console.log(id)
				localStorage.setItem("id",id)
				localStorage.setItem("data",data)
				window.location.href="xiangqing.html";
			})
			
			
		})
	
 }	



		






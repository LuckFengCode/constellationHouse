define(["jquery"],function($){
	//console.log("--")
	return {

	getajax:function(){

	var id=localStorage.getItem("id")
	//console.log(id)
	var url = "data/page"+id+".json"
		//console.log(url)
	
		$.get(url,{},function(res){
			//console.log(res)
		//console.log(res[1][1].children1[0].src);

		var html = "";
		for (var i = 0; i < res.length; i++) {
			//console.log(res.length)
		html +='<div id="region"><strong>'+res[i].tip+'<span class="add"></span></strong><dl><dt><img src="'+res[i].children1[0].src+'" alt=""></dt><dd><p><a href="">'+res[i].children1[0].title+'</a></p><span>'+res[i].children1[0].content+'</span></dd></dl><ul>'

			//console.log(html)
			// 引入li里的内容
			var arr =res[i].children2

			for (var j = 0; j < arr.length; j++) {				
				//console.log(arr[j].title)
			html+='<li><a href="">'+arr[j].title+'</a></li>'
			}
		html +='</ul></div>'
		}
		
		//console.log(html)

		$("#jee").html(html)


		$("#jee").find(".add").click(function(){
			//alert(1)
			window.location.href="https://www.baidu.com/"
		})



	},"json");




	}



	};
});


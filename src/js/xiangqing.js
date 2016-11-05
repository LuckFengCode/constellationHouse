window.onload=function(){
	require(["changecolor","otherxz","jquery"],function(change,otherxz,$){
		$('.tab-sex span').click(function(){
			//console.log($(this).index()) 
			var index=$(this).index();
			var $this=$(this);
			change.changecolor(index,$this);
		})


		function getData(consName,type){
			$.get('/api',{
				//向服务器发送的数据
				url :  "http://web.juhe.cn:8080/constellation/getAll",
				consName:consName,
				type : type,
				key : "eb35e534165b1ba9796130ea4029954c"
			},function(result){
				//console.log(result);
				var html="";
			
				html+="<li><span>特点</span>热情活力</li>";
				html+='<li><span>速配星座</span>'+result.QFriend+'</li>'
				html+='<li><span>幸运数字</span>'+result.number+'</li>'
				html+="<li><span>幸运颜色</span>"+result.color+"</li>"
				html+='<li><span>健康指数</span>'+result.health+'</li>'
				html+='<li><span>爱情指数</span>'+result.love+'</li>'
				html+='<li><span>财运指数</span>'+result.money+'</li>'
				html+='<li><span>工作指数</span>'+result.work+'</li>'
				html+='<li><span>金属</span>铁</li>'

				$('.mT').html(html);
				var html1='';
				html1+='<a href="##">'+result.summary+'</a>';
				$('.fortune p').html(html1)
				var html3='';
				html3+=result.name;
				$('.top h1 strong i').html(html3)
			},"json");

		}

		//数据请求
		

		function getMonth(consName,type){
			$.get('/api',{
				//向服务器发送的数据
				url :  "http://web.juhe.cn:8080/constellation/getAll",
				consName:consName,
				type : type,
				key : "eb35e534165b1ba9796130ea4029954c"
			},function(result){
				//console.log(result);
				var html2="";
				html2+=result.all
				$('.top p').html(html2)

				
			},"json");

		}

		//数据请求
		
		
		//解析字符串
		var data=localStorage.getItem("data")
		//console.log(data)
		var arr = data.split(";")
		//console.log(arr);
		var id = arr[0];
		 
		var html4="";
		html4=arr[2];
	
		$('.top h1 strong span').html(html4)

		var html5="";
		html5='<img src="'+arr[3]+'" alt="">'
		$('.top .img').html(html5)

		var html6="";
		html=arr[4];
		$('.top h1 small').html(html);
		getMonth(arr[1],"month");
		getData(arr[1],"today");



		otherxz();
	})
}		
require(["json","jquery"],function(json,$){
	json.getlist(function(res){
		console.log(res);
		var html = "";
		res.forEach(function(item,i){
			html+='<div class="libox ibox box"><h2 class="bar"><span class="fr"><a href="javascript" class="type_more"></a></span><strong>';
			html+='<a href="javascript:;">'+item.h2+'</a></strong></h2><div class="inner"><dl><dt><a href="javascript:;">';
			html+='<img width="120" height="90" src="'+item.dt1img+'" alt="'+item.dd1strong+'" />';
			html+='</a></dt><dd><a href="javascript:;" title="'+item.dd1strong+'"><strong>'+item.dd1strong+'</strong>';
			html+='<p>'+item.dd1p+'</p></a></dd></dl><dl><dt><a href="javascript:;"><img width="120" height="90" src="'+item.dt2img+'" alt="'+item.dd2strong+'" />';
			html+='</a></dt><dd><a href="javascript:;" title="'+item.dd2strong+'"><strong>'+item.dd2strong+'</strong><p>'+item.dd2p+'</p>';
			html+='</a></dd></dl><ul class="lib_text"><li><a href="javascript:;" title="'+item.li1+'">'+item.li1+'</a></li>';
			html+='<li><a href="javascript:;" title="'+item.li2+'">'+item.li2+'</a></li><li><a href="javascript:;" title="'+item.li3+'">'+item.li3+'</a></li>';
			html+='<li><a href="javascript:;" title="'+item.li4+'">'+item.li4+'</a></li><li><a href="javascript:;" title="'+item.li5+'">'+item.li5+'</a></li>';
			html+='<li><a href="javascript:;" title="'+item.li6+'">'+item.li6+'</a></li></ul></div></div>';
		})
		$('#indexMain').append(html);	
	});
});

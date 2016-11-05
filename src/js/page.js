function page(){
	require(["getajax","topbtn","model","jquery"],function(getajax,topbtn,model,$){
		//ajak加载分页数据
		getajax.getajax();
		//返回顶部按钮
		topbtn.topbtn();
		topbtn.topreturn();
		//手机版电脑版切换
		model.model();

	})	
}








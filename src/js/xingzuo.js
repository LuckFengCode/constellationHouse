define(["jquery"],function($){
	function xingzuo(info,year,month,date) {
			function getXZ(month,date){
				if (month == 1 && date >=20 || month == 2 && date <=18) {$('.result').html("结果："+info+year+"年"+month+"月"+date+"日为："+"<span>水瓶座</span>");} 
				if (month == 1 && date > 31) {value = "Huh?";} 
				if (month == 2 && date >=19 || month == 3 && date <=20) {$('.result').html("结果："+info+year+"年"+month+"月"+date+"日为："+"<span>双鱼座</span>");} 
				if (month == 2 && date > 29) {value = "Say what?";} 
				if (month == 3 && date >=21 || month == 4 && date <=19) {$('.result').html("结果："+info+year+"年"+month+"月"+date+"日为："+"<span>白羊座</span>");} 
				if (month == 3 && date > 31) {value = "OK. Whatever.";} 
				if (month == 4 && date >=20 || month == 5 && date <=20) {$('.result').html("结果："+info+year+"年"+month+"月"+date+"日为："+"<span>金牛座</span>");} 
				if (month == 4 && date > 30) {value = "I'm soooo sorry!";} 
				if (month == 5 && date >=21 || month == 6 && date <=21) {$('.result').html("结果："+info+year+"年"+month+"月"+date+"日为："+"<span>双子座</span>");} 
				if (month == 5 && date > 31) {value = "Umm ... no.";} 
				if (month == 6 && date >=22 || month == 7 && date <=22) {$('.result').html("结果："+info+year+"年"+month+"月"+date+"日为："+"<span>巨蟹座</span>");} 
				if (month == 6 && date > 30) {value = "Sorry.";} 
				if (month == 7 && date >=23 || month == 8 && date <=22) {$('.result').html("结果："+info+year+"年"+month+"月"+date+"日为："+"<span>狮子座</span>");} 
				if (month == 7 && date > 31) {value = "Excuse me?";} 
				if (month == 8 && date >=23 || month == 9 && date <=22) {$('.result').html("结果："+info+year+"年"+month+"月"+date+"日为："+"<span>处女座</span>");} 
				if (month == 8 && date > 31) {value = "Yeah. Right.";} 
				if (month == 9 && date >=23 || month == 10 && date <=22) {$('.result').html("结果："+info+year+"年"+month+"月"+date+"日为："+"<span>天枰座</span>");} 
				if (month == 9 && date > 30) {value = "Try Again.";} 
				if (month == 10 && date >=23 || month == 11 && date <=21) {$('.result').html("结果："+info+year+"年"+month+"月"+date+"日为："+"<span>天蝎座</span>");} 
				if (month == 10 && date > 31) {value = "Forget it!";} 
				if (month == 11 && date >=22 || month == 12 && date <=21) {$('.result').html("结果："+info+year+"年"+month+"月"+date+"日为："+"<span>人马座</span>");} 
				if (month == 11 && date > 30) {value = "Invalid Date";} 
				if (month == 12 && date >=22 || month == 1 && date <=19) {$('.result').html("结果："+info+year+"年"+month+"月"+date+"日为："+"<span>摩羯座</span>");} 
				if (month == 12 && date > 31) {value = "No way!";} 
			}
			getXZ(month,date);
		}
		return xingzuo;
});

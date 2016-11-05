define(["jquery"],function($){
	return{
		changecolor : function(index,$this){
			if(index == 0){
				$this.addClass('cur-gilr')
				$this.siblings('span').removeClass('cur-man')
				//console.log($this.siblings())
				$this.parent().next().css('display','block');
				$this.parent().siblings('.man').css('display','none');
			}
			if(index == 1){
				$this.addClass('cur-man');
				$this.siblings('span').removeClass('cur-gilr')
				$this.parent().siblings('.man').css('display','block');
				$this.parent().siblings('.gilr').css('display','none');
			}
		}
	}
})
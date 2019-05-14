var Control=new function(){
	"use strict";
	this.CanvasID={};
	this.FunID={};
	this.flag_01=1;
	this.flag_02=1;
	this.flag_03=1;
	this.dataY=[];
	this.CanvasName="Canvas_01";
}
function lighton(ID){
	"use strict";
	document.getElementById(ID).src="image/lighton.png";
}
function lightoff(ID){
	"use strict";
	document.getElementById(ID).src="image/lightoff.png";
}


document.getElementById("Control_01").addEventListener("click",function(){
	"use strict";
	if(Control.flag_01===1){
		Control.flag_01=0;
		lighton("myimage_01");
		 
	}
	else if(Control.flag_01===0)
	{
		Control.flag_01=1;
		lightoff("myimage_01");
		
	}
});
document.getElementById("Control_02").addEventListener("click",function(){
	"use strict";
	if(Control.flag_02===1){
		Control.flag_02=0;
		lighton("myimage_02");
		 
	}
	else if(Control.flag_02===0)
	{
		Control.flag_02=1;
		lightoff("myimage_02");
		
	}
});
document.getElementById("Control_03").addEventListener("click",function(){
	"use strict";
	if(Control.flag_03===1){
		Control.flag_03=0;
		lighton("myimage_03");
		 
	}
	else if(Control.flag_03===0)
	{
		Control.flag_03=1;
		lightoff("myimage_03");
		
	}
});



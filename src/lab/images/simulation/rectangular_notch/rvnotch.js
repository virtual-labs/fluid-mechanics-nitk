//on click of next button
var mpointer=0;
var repeat =0;
var flag=0;



function navNext()
{

for (temp = 0; temp <= 6 ; temp++) 
{ 
document.getElementById('canvas'+temp).style.visibility="hidden";
}

simsubscreennum+=1;
document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
document.getElementById('nextButton').style.visibility="hidden";
magic();
}


//Move pointing finger with mouse
$(document).mousemove(function(e)
{

if(simsubscreennum==1 && mpointer==0) 
{
if(e.pageX<800 && e.pageY<600)  
{
document.getElementById('onarm').style.visibility="visible";

 $("#onarm").css({left:e.pageX, top:e.pageY});
}


}

else if(simsubscreennum!=1)
{
	document.getElementById('onarm').style.visibility="hidden";
}


});
//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
if (document.getElementById('arrow1').style.visibility=="hidden")
document.getElementById('arrow1').style.visibility="visible";
else
document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
clearInterval(myInt);
document.getElementById('arrow1').style.visibility="hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{
	
	if (simsubscreennum==1)
	{
		if(flag==1)
		{
			document.getElementById('can1on').onclick="";
			document.getElementById('pumptext').innerHTML="Stop the pump by pressing the stop button."
			document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
			document.getElementById('trial').innerHTML="";
				
		}
		else
		{
			
			document.getElementById('can1on').onclick=function() { step1(); };
			document.getElementById('can1off').onclick=function() { stepstop(); };
		}
		
	}
	
	else if (simsubscreennum==2)
	{
		
		
		
		refresh1();
		repeat+=1;
		flag=1;
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		
		document.getElementById('can2-2').style.visibility="hidden";
		document.getElementById('can2-3').style.visibility="hidden";
		
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 350px; top: 180px; height: 50px; z-index: 10;";
			
		
		
		document.getElementById('can2-4').onclick=function() { step2(); };
		
	}
	
	else if (simsubscreennum==3)
	{
		document.getElementById('can2-2').style.visibility="hidden";
		document.getElementById('can2-3').style.visibility="hidden";
		//document.getElementById('can3-9').innerHTML="Initial reading (water level till crest) = 3.15 cm";
			
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 180px; top: 175px; height: 50px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
			 
		document.getElementById('can3-7').onclick=function() { step3();};
		
	}
	
	else if (simsubscreennum==4)
	{
		
		//document.getElementById('can3-9').innerHTML="Initial reading (water level till crest) = 3.15 cm";
			
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 180px; top: 290px; height: 50px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
			 
		document.getElementById('can4-7').onclick=function() { step4();};
		
		
	}

	else if (simsubscreennum==5)
	{
				
		step5();
		if(repeat==7)
		{
			simsubscreennum=0;
			
		}
		
		else if(repeat < 7)
		{
			simsubscreennum=1;
		}
		
	}
	
	else if (simsubscreennum==6)
	{
		
		
	}
	
	
}

function step1()
{
	mpointer=1;
	document.getElementById('onarm').style.visibility="hidden";
	document.getElementById('nextButton').style.visibility="visible";
}



function step2()
{
	
	
	myStopFunction();
	
	document.getElementById('can2-2').style.visibility="visible";
	document.getElementById('can2-3').style.visibility="visible";
	
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 670px; top: 190px; height: 50px; z-index: 10;";
			
	document.getElementById("arrow1").style.WebkitTransform = "rotate(-45deg)"; 
		// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(-45deg)"; 
		// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(-45deg)";
	
	document.getElementById('can2-3').onclick=function() { step2andhalf(); };
	
	
}

function step2andhalf()
{
	myStopFunction();
	
	document.getElementById('can2-3').style.transformOrigin = "14% 15%";
	document.getElementById('can2-3').style.animation = "valveturn-4 1.5s forwards ";
	
	setTimeout(function()
	{
		document.getElementById('nextButton').style.visibility="visible";
	
	}, 1600);
}


function step3()
{
	
myStopFunction();
	setTimeout(function(){
	document.getElementById("can3-13").style.animation = "water-5 1.5s 1 forwards";
	
	}, 1000);
	
	setTimeout(function(){
	document.getElementById("can3-3").style.animation = "myhook-2 2s 1  forwards";
	
	step3andhalf();
	
	}, 2700);

}



function step3andhalf()
{
	setTimeout(function(){
	
	document.getElementById('can3-10').innerHTML="Final reading = "+values[lnt][1] +" cm" ;
	document.getElementById('can3-11').innerHTML="Head of water = "+values[lnt][2] + " cm";
	document.getElementById('can3-12').innerHTML="Theoretical discharge, Q<sub>th</sub> = "+values[lnt][8] +" cm<sup>3</sup>/sec" ;
	setTimeout(function(){
	document.getElementById('nextButton').style.visibility="visible";
	}, 500);
	
	}, 3000);
}

function step4()
{
	myStopFunction();
	setTimeout(function(){
	document.getElementById("can4-13").style.animation = "water-5 1.5s 1 forwards";
	
	}, 1000);
	
	setTimeout(function(){
	document.getElementById("can4-3").style.animation = "myhook-2 2s 1  forwards";
	
	step4andhalf();
	
	}, 2700);
}

function step4andhalf()
{
	setTimeout(function(){
	
	document.getElementById('can4-10').innerHTML="Final reading = "+values[lnt][4] +" cm" ;
	document.getElementById('can4-11').innerHTML="Head of water = "+values[lnt][5] + " cm";
	document.getElementById('can4-12').innerHTML="Actual discharge, Q<sub>act</sub> = "+values[lnt][7] +" cm<sup>3</sup>/sec" ;
	setTimeout(function(){
	document.getElementById('nextButton').style.visibility="visible";
	}, 500);
	
	}, 3000);
}


function step5()
{
	setTimeout(function(){
	document.getElementById('can6-5').innerHTML="Coefficient of discharge, C<sub>d</sub> = "+values[lnt][9] +" cm" ;
	document.getElementById('nextButton').style.visibility="visible";
	lnt+=1;
	}, 500);
	
	
}






function stepstop()
{
	if(flag!=1){
		document.getElementById('nextButton').style.visibility="hidden";	
	}
	else{
		simsubscreennum=5;
		document.getElementById('nextButton').style.visibility="hidden";
	}
	
}

function refresh1()
{
	document.getElementById('can2-3').style.transformOrigin = "";
	document.getElementById('can2-3').style.animation = "";
	
	document.getElementById("can3-13").style.animation = "";
	document.getElementById("can3-3").style.animation = "";
	
	document.getElementById('can3-10').innerHTML="Final reading = ";
	document.getElementById('can3-11').innerHTML="Head of water = ";
	document.getElementById('can3-12').innerHTML="Theoretical discharge, Q<sub>th</sub> = ";
	
	document.getElementById("can4-13").style.animation = "";
	document.getElementById("can4-3").style.animation = "";
	
	document.getElementById('can4-10').innerHTML="Final reading = ";
	document.getElementById('can4-11').innerHTML="Head of water = ";
	document.getElementById('can4-12').innerHTML="Actual discharge, Q<sub>act</sub> = ";
	
	
	
	document.getElementById("can4-7").style.animation = "";
	
	document.getElementById('can6-5').innerHTML="Coefficient of discharge, C<sub>d</sub> = ";
	
	
	document.getElementById('nextButton').style.visibility="hidden";	
	
}
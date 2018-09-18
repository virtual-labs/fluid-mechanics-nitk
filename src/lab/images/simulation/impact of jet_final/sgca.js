//on click of next button
var mpointer=0;
var repeat =0;
var flag=0;
var lnt=0;



function navNext()
{

     for (temp = 0; temp <= 8 ; temp++) 
     { 
         document.getElementById ('canvas'+temp).style.visibility="hidden";
     }
     simsubscreennum+=1;

     document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
     document.getElementById('nextButton').style.visibility="hidden";
     magic();
}


function navPrev()
{
	navNext();
	document.getElementById('prevButton').style.visibility="hidden";
	document.getElementById('v2-1').style.visibility="hidden";
}




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
		
		refresh();
      	document.getElementById('nextButton').style.visibility="hidden";
      	document.getElementById('v2-1').style.visibility="hidden";
   		// setTimeout(function()
         // {	
		    // setTimeout(function(){
		        // if(document.getElementById('f').checked)
		        // {
			         // flag=1;
	            // }
	            // else   if(document.getElementById('h').checked)
			    // {
		             // flag=2;
		        // } else   if(document.getElementById('i').checked)
			    // {
		             // flag=3;
		        // }
			// },500);
			
	     // }, 3000);
		 // setTimeout(function(){
			 // if(flag==1||flag==2||flag==3)
			 // {
		 		 	 // document.getElementById('nextButton').style.visibility="visible";
			 // }
			 // else if(flag==0)
			 // {
				 // simsubscreennum=0;
				 // navNext();
			 // }
         // },1000);
		 document.getElementById("can1-1").onclick=function(){fvane();}
		 document.getElementById("can1-2").onclick=function(){hvane();}
		 document.getElementById("can1-3").onclick=function(){ivane();}
	}
	
	else if (simsubscreennum==2)
	{  
         refresh();
		 document.getElementById('nextButton').style.visibility="hidden";
		 
		 if(flag==0)
			{
				simsubscreennum=0;
				document.getElementById('canvas2').style.visibility="hidden";
				document.getElementById('prevButton').style.visibility="visible";
				setTimeout(function(){
					document.getElementById('v2-1').style.visibility="visible";
                },500);
				alert("You have to choose type of vane to proceed.\n");
			}
		else if(flag==1 || flag==2 || flag==3)
		{
		 if(flag==1)
		 {
			 document.getElementById('can2-1f').style.visibility="visible";
		 }
		 else if(flag==2)
		 {
			 document.getElementById('can2-1h').style.visibility="visible";
		 }
		 else if(flag==3)
		 {
			 document.getElementById('can2-1i').style.visibility="visible";
		 }
		 document.getElementById('can2-2').style.visibility="visible";
		 document.getElementById('can2-3').style.visibility="visible";
		 document.getElementById('can2-7').style.visibility="visible";
		 document.getElementById('can2-out').style.visibility="visible";
		 setTimeout(function(){
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:240px; top: 115px; height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(270deg)";
		     document.getElementById('can2-4').onclick="";
		     document.getElementById('can2-3').onclick="";
	         document.getElementById('can2-7').onclick=function(){step2();}
		 },1000);
		}
    }
	
	
	else if (simsubscreennum==3)
	{
		refresh();
		if(flag==1)
		 {
			 document.getElementById('can2-1f').style.visibility="hidden";
		 }
		 else if(flag==2)
		 {
			 document.getElementById('can2-1h').style.visibility="hidden";
		 }
		 else if(flag==3)
		 {
			 document.getElementById('can2-1i').style.visibility="hidden";
		 }
		 document.getElementById('can2-7').style.visibility="hidden";
		 document.getElementById('can2-2').style.visibility="hidden";
		 document.getElementById('can2-3').style.visibility="hidden";
		 document.getElementById('nextButton').style.visibility="hidden";
		 document.getElementById('can2-4').style.visibility="hidden";
         document.getElementById('can2-5').style.visibility="hidden";
		 document.getElementById('can2-6').style.visibility="hidden";
		 document.getElementById('can2-out').style.visibility="hidden";
		 if(flag==1)
		 {
			 document.getElementById('can3-1f').style.visibility="visible";
		 }
		 else if(flag==2)
		 {
			 document.getElementById('can3-1h').style.visibility="visible";
		 }
		 else if(flag==3)
		 {
			 document.getElementById('can3-1i').style.visibility="visible";
		 }
		 setTimeout(function(){
			 document.getElementById('can3-4').style.visibility="visible";
		 },1200);
		 document.getElementById('can3-2').style.visibility="visible";
		 document.getElementById('can3-2a').style.visibility="visible";
		 document.getElementById('can3-3').style.visibility="visible";
		 document.getElementById('can3-out').style.visibility="visible";
		 document.getElementById('can3-6').style.visibility="visible";
  		 setTimeout(function()
		 {
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:495px; top: 225px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('can3-4').onclick=function(){step3();}
		 },1300);
    }
	else if (simsubscreennum==4)
	{
		refresh();
		repeat+=1;
		 document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		 document.getElementById('trial').innerHTML="Trial : " + repeat;
		if(flag==1)
		  {
			
			document.getElementById('v7-4f').style.visibility="hidden";
			
		  }
		   else if(flag==2)
		   {
		
			document.getElementById('v7-4h').style.visibility="hidden";
			
		   }
		   else if(flag==3)
		   {
			 
			 document.getElementById('v7-4i').style.visibility="hidden";
			 
		   }
		 
		document.getElementById('can3-2').style.visibility="hidden";
		 document.getElementById('can3-2a').style.visibility="hidden";
		 document.getElementById('can3-3').style.visibility="hidden";
		 document.getElementById('can3-out').style.visibility="hidden";
		 document.getElementById('can3-6').style.visibility="hidden";
		if(flag==1)
		 {
			 document.getElementById('can3-1f').style.visibility="hidden";
		 }
		 else if(flag==2)
		 {
			 document.getElementById('can3-1h').style.visibility="hidden";
		 }
		 else if(flag==3)
		 {
			 document.getElementById('can3-1i').style.visibility="hidden";
		 }
		 document.getElementById('nextButton').style.visibility="hidden";
		 document.getElementById('v3-1').style.visibility="hidden";
		 document.getElementById('v3-2').style.visibility="hidden";
		 document.getElementById('can3-5').style.visibility="hidden";
		 document.getElementById('can3-7').style.visibility="hidden";
		 document.getElementById('can3-8').style.visibility="hidden";
		 document.getElementById('can3-out').style.visibility="hidden";
		 if(flag==1)
		 {
			 document.getElementById('can4-1f').style.visibility="visible";
		 }
		 else if(flag==2)
		 {
			 document.getElementById('can4-1h').style.visibility="visible";
		 }
		 else if(flag==3)
		 {
			 document.getElementById('can4-1i').style.visibility="visible";
		 }
		 document.getElementById('can4-2').style.visibility="visible";
		 document.getElementById('can4-3').style.visibility="visible";
		 document.getElementById('can4-4').style.visibility="visible";
		 document.getElementById('can4-out').style.visibility="visible";
		 document.getElementById('can4-5').style.visibility="visible";
		 setTimeout(function(){
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:25px; top: 180px; height: 30px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('can4-5').onclick=function(){step4zoom();}
		 },600);
		 		 
		  /*$(document).ready(function(){
			 var small={width:"34px" , height:"58px"}; 
			 var large={width:"320px" , height:"352px"};
			 var count=1;
			 $("#can4-6").css(small).on('click',function(){
			 $(this).animate((count==1)?large:small);
			 document.getElementById('can4-2').style.visibility="hidden";
			 });
		     });*/
			 
			 
			 
	}
	else if (simsubscreennum==5)
	{
		 refresh();
		 document.getElementById('nextButton').style.visibility="hidden";
		 document.getElementById('can4-7').style.visibility="hidden";
		 document.getElementById('can4-8').style.visibility="hidden";
		 document.getElementById('can4-10').style.visibility="hidden";
		 document.getElementById('can4-10a').style.visibility="hidden";
		 document.getElementById('can4-out').style.visibility="hidden";
		 
		 document.getElementById('can4-3').style.visibility="hidden";
		 document.getElementById('can4-4').style.visibility="hidden";
		 document.getElementById('can4-out').style.visibility="hidden";
		     if(flag==1)
		     {
			 document.getElementById('can5-1f').style.visibility="visible";
		     }
		     else if(flag==2)
		     {
			 document.getElementById('can5-1h').style.visibility="visible";
		     }
		     else if(flag==3)
		     {
			 document.getElementById('can5-1i').style.visibility="visible";
		     }
			 document.getElementById('can5-10a').style.visibility="visible";
		     document.getElementById('can5-10b').style.visibility="visible";
			 document.getElementById('can5-2').style.visibility="visible";
			 document.getElementById('can5-2a').style.visibility="visible";
			 document.getElementById('can5-3').style.visibility="visible";
			 document.getElementById('can5-4').style.visibility="visible";
			 document.getElementById('can5-5').style.visibility="visible";
			 document.getElementById('can5-out').style.visibility="visible";
		setTimeout(function(){	 
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:90px; top: 320px;; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(225deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(225deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(225deg)";
		 document.getElementById('can5-5').onclick=function(){step5();}
		},500);
	}
	else if (simsubscreennum==6)
	{
		 refresh();
		 myStopFunction();
		 
		     document.getElementById('can5-2').style.visibility="hidden";
			 document.getElementById('can5-2a').style.visibility="hidden";
			 document.getElementById('can5-3').style.visibility="hidden";
			 document.getElementById('can5-4').style.visibility="hidden";
			 document.getElementById('can5-5').style.visibility="hidden";
			 document.getElementById('can5-out').style.visibility="hidden";
		 
		 if(flag==1)
		 {
			 document.getElementById('can5-1f').style.visibility="hidden";
		 }
		 else if(flag==2)
		 {
			 document.getElementById('can5-1h').style.visibility="hidden";
		 }
		 else if(flag==3)
		 {
			 document.getElementById('can5-1i').style.visibility="hidden";
		 }
		 document.getElementById('can5-8w').style.visibility="hidden"
		
	    if(flag==1)
	    {
	     document.getElementById('can5-8wf').style.visibility="hidden";
	    }
	    else if(flag==2)
	    {
		document.getElementById('can5-8wh').style.visibility="hidden";
	    }
	    else if(flag==3)
	    {
		document.getElementById('can5-8wi').style.visibility="hidden";
	    }
		 document.getElementById('can5-out').style.visibility="hidden";
		 document.getElementById('can5-10a').style.visibility="hidden";
		 document.getElementById('can5-10b').style.visibility="hidden";
		 document.getElementById('can5-9').style.visibility="hidden";
		 document.getElementById('can5-11').style.visibility="hidden";
		 document.getElementById('can6-10').style.visibility="visible";
		 document.getElementById('can6-8w').style.visibility="visible";
		  if(flag==1)
		  {
			document.getElementById('can6-1f').style.visibility="visible";
			document.getElementById('can6-8wf').style.visibility="visible";
		  }
		   else if(flag==2)
		   {
			document.getElementById('can6-1h').style.visibility="visible";
			document.getElementById('can6-8wh').style.visibility="visible";
		   }
		   else if(flag==3)
		   {
			 document.getElementById('can6-1i').style.visibility="visible";
			 document.getElementById('can6-8wi').style.visibility="visible";
		   }
		 
		 document.getElementById('can6-out').style.visibility="visible";
		 document.getElementById('can6-2').style.visibility="visible";
		 document.getElementById('can6-2a').style.visibility="visible";
		 document.getElementById('can6-3').style.visibility="visible";
		 document.getElementById('can6-4').style.visibility="visible";
		 document.getElementById('can6-6').style.visibility="visible";
		 setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:376px; top: 422px; height: 30px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(270deg)";
		 document.getElementById('can6-out').onclick=function(){step6();}
		 },1000);
	}
	
	else if (simsubscreennum==7)
	{
		 refresh();
		 myStopFunction();
		 document.getElementById('can6-out').style.visibility="hidden";
		 document.getElementById('can6-2').style.visibility="hidden";
		 document.getElementById('can6-2a').style.visibility="hidden";
		 document.getElementById('can6-3').style.visibility="hidden";
		 document.getElementById('can6-4').style.visibility="hidden";
		 document.getElementById('can6-6').style.visibility="hidden";
		 document.getElementById('can6-outoff').style.visibility="hidden";
		 
		 if(flag==1)
		  {
			document.getElementById('can6-1f').style.visibility="hidden";
			document.getElementById('v7-4f').style.visibility="visible";
			document.getElementById('can6-8wf').style.visibility="hidden";
		  }
		   else if(flag==2)
		   {
			document.getElementById('can6-1h').style.visibility="hidden";
			document.getElementById('v7-4h').style.visibility="visible";
			document.getElementById('can6-8wh').style.visibility="hidden";
		   }
		   else if(flag==3)
		   {
			 document.getElementById('can6-1i').style.visibility="hidden";
			 document.getElementById('v7-4i').style.visibility="visible";
			 document.getElementById('can6-8wi').style.visibility="hidden";
		   }
		 document.getElementById('can6-8w').style.visibility="hidden"
	     document.getElementById('nextButton').style.visibility="visible";
		 setTimeout(function(){
			 if(flag==1)
			 {
				document.getElementById('v7-5').innerHTML="Velocity of jet,V = " +flat[3][lnt] + "cm/sec";
                document.getElementById('v7-6').innerHTML="Theoretical force, F<sub>th</sub> = " +flat[4][lnt]+ "N"; 
				document.getElementById('v7-7').innerHTML="Actual force, F<sub>act</sub> = " +flat[5][lnt]+ "N";
                document.getElementById('v7-8').innerHTML="Coefficient of impact = "+flat[6][lnt] ;			
			 }
			 else if(flag==2)
			 {
				document.getElementById('v7-5').innerHTML="Velocity of jet,V = " +hemi[3][lnt] + "cm/sec";
                document.getElementById('v7-6').innerHTML="Theoretical force, F<sub>th</sub> = " +hemi[4][lnt]+ "N"; 
				document.getElementById('v7-7').innerHTML="Actual force, F<sub>act</sub> = " +hemi[5][lnt]+ "N";
                document.getElementById('v7-8').innerHTML="Coefficient of impact = "+hemi[6][lnt] ;
			 }
			 else if(flag==3)
			 {
				document.getElementById('v7-5').innerHTML="Velocity of jet,V = " +inclined[3][lnt] + "cm/sec";
                document.getElementById('v7-6').innerHTML="Theoretical force, F<sub>th</sub> = " +inclined[4][lnt]+ "N"; 
				document.getElementById('v7-7').innerHTML="Actual force, F<sub>act</sub> = " +inclined[5][lnt]+ "N";
                document.getElementById('v7-8').innerHTML="Coefficient of impact = "+inclined[6][lnt] ; 
				 
			 }
		 },500);
		 setTimeout(function(){
			 lnt++;
		 },600);
         if(repeat<3)
		 {
			simsubscreennum=3;
			setTimeout(function(){
		    document.getElementById('nextButton').style.visibility="visible";
			},600);
		 }
	}
	
	
	else if (simsubscreennum==8)
	{
		document.getElementById('trial').style.visibility="hidden";
		document.getElementById('canvas7').style.visibility="hidden";
        if(flag==1)
		  {
			
			document.getElementById('v7-4f').style.visibility="hidden";
			
		  }
		   else if(flag==2)
		   {
		
			document.getElementById('v7-4h').style.visibility="hidden";
			
		   }
		   else if(flag==3)
		   {
			 
			 document.getElementById('v7-4i').style.visibility="hidden";
			 
		   }
		document.getElementById('nextButton').style.visibility="hidden";
		//document.getElementById('step7text1').style="visibility:visible; border:1px solid; position:absolute; cursor:pointer; padding:5px; left:30px; top:50px ";
		 //document.getElementById('graph').src="images/rivgraph.png"
		 document.getElementById('step8text1').onclick=function(){step8();}
		 
    }
}
    
function fvane()
{
	flag=1
	document.getElementById('vane1').style.color="#FC0D05";
	document.getElementById('vane2').style.color="#000000";
	document.getElementById('vane3').style.color="#000000";
	document.getElementById('vane4').innerHTML="Selected vane type : <b>Flat Vane</b>";
    document.getElementById("nextButton").style.visibility="visible";
}

function hvane()
{
	flag=2;
	document.getElementById('vane1').style.color="#000000";
	document.getElementById('vane2').style.color="#FC0D05";
	document.getElementById('vane3').style.color="#000000";
	document.getElementById('vane4').innerHTML="Selected vane type : <b>Hemi spherical  Vane</b>";
    document.getElementById("nextButton").style.visibility="visible";
}

function ivane()
{
	flag=3;
	document.getElementById('vane1').style.color="#000000";
	document.getElementById('vane2').style.color="#000000";
	document.getElementById('vane3').style.color="#FC0D05";
	document.getElementById('vane4').innerHTML="Selected vane type : <b>Inclined Vane</b>";
    document.getElementById("nextButton").style.visibility="visible";
}
	
	
	function step2()
	{
		 myStopFunction();
		 document.getElementById('can2-5').style.visibility="visible";
		 document.getElementById('can2-6').style.visibility="visible";
		 
		 
		 setTimeout(function()
		 {   
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:414.5px; top: 110px;  height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(270deg)";
			 document.getElementById('can2-4').onclick="";
			 document.getElementById('can2-7').onclick="";
             document.getElementById('can2-3').onclick=function(){step21();}
		 },1000);
        
    }
	function step21()
	{
		 myStopFunction();
	     document.getElementById('can2-4').style.visibility="visible";	
		 	
		 setTimeout(function()
		 {   
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:520px; top:155px; height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(180deg)";
			 document.getElementById('can2-7').onclick="";
			 document.getElementById('can2-3').onclick="";
             document.getElementById('can2-4').onclick=function(){step22();}
		 },1000);
		 
	}
	function step22()
	{
		myStopFunction();
		
		document.getElementById('can2-4').style.transformOrigin = "20% 20%";
	    document.getElementById('can2-4').style.animation = "valveturn-4 1.5s forwards ";
		document.getElementById('can2-2').style.transformOrigin = "55% 55%";
	    document.getElementById('can2-2').style.animation = "valveturn-2 1.5s forwards ";
        document.getElementById('can2-3').style.transformOrigin = "100% 80%";
	    document.getElementById('can2-3').style.animation = "valveturn-3 1.5s forwards ";
        document.getElementById('can2-6').style.transformOrigin = "20% 20%";
	    document.getElementById('can2-6').style.animation = "mymove1 2.5s forwards ";
		setTimeout(function()
		 {   
		 
			 document.getElementById('can2-4').style.visibility="hidden";
			 document.getElementById('nextButton').style.visibility="visible";
		 },2650);
   	}
	
	
function step3()
	{
		 myStopFunction();
         document.getElementById('can3-4').style.visibility="hidden";
		 document.getElementById('can3-5').style.visibility="visible";
		 setTimeout(function(){
		     document.getElementById('can3-7').style.visibility="visible";
		     document.getElementById('v3-1').style.visibility="visible";
		 },1000);
		 setTimeout(function(){
		     document.getElementById('can3-8').style.visibility="visible";
		     document.getElementById('v3-2').style.visibility="visible";
		 },2000);
		 setTimeout(function(){
			 document.getElementById('nextButton').style.visibility="visible";
		 },2300);
		}
		
		
function step4zoom()
{
	 myStopFunction();
	 document.getElementById('can4-2').style.visibility="hidden";
	 document.getElementById('can4-5').style.visibility="hidden";
	 document.getElementById('can4-7').style.visibility="visible";
	 document.getElementById('can4-8').style.visibility="visible";
     if(flag==1)
	 {
		 document.getElementById('can4-1f').style.visibility="hidden";
	 }
	 else if(flag==2)
	 {
		 document.getElementById('can4-1h').style.visibility="hidden";
	 }
	 else if(flag==3)
	 {
		 document.getElementById('can4-1i').style.visibility="hidden";
	 }
	 document.getElementById('can4-out').style.visibility="hidden";
	 document.getElementById('can4-3').style.visibility="hidden";
	 document.getElementById('can4-4').style.visibility="hidden";
	 setTimeout(function(){
		 document.getElementById('can4-9').style.visibility="visible";
		 document.getElementById('can4-10').style.visibility="visible";
		 document.getElementById('v4-1').style.visibility="visible";
			if(flag==1)
			{
			document.getElementById('v4-1').innerHTML= "Put " +flat[0][lnt]+ "gm weight on the pan";
			}
			else if(flag==2)
			{
				document.getElementById('v4-1').innerHTML= "Put " +hemi[0][lnt]+ "gm weight on the pan";
			}
		    else if(flag==3)
			{
				document.getElementById('v4-1').innerHTML= "Put " +inclined[0][lnt]+ "gm weight on the pan";
			}
	},500);
	setTimeout(function(){
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:590px; top: 415px; height: 30px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(270deg)";
		 document.getElementById('can4-10').onclick=function(){step4();}
	},1000);
}	
	
function step4()
{
		 myStopFunction();
		 document.getElementById('can4-13').style.visibility="visible";
		 document.getElementById('can4-13').style.transformOrigin = "100% 80%";
	     document.getElementById('can4-13').style.animation = "mymove2 3s forwards ";
		 
			document.getElementById('can4-10').style.visibility="hidden";
			
		 setTimeout(function(){
			 document.getElementById('can4-10a').style.visibility="visible";
			 document.getElementById('can4-13').style.visibility="hidden";
			if(flag==1)
			{
			document.getElementById('v4-1').style.visibility="hidden";
			}
			else if(flag==2)
			{
				document.getElementById('v4-1').style.visibility="hidden";
			}
		    else if(flag==3)
			{
				document.getElementById('v4-1').style.visibility="hidden";
			}
		},1550);
		setTimeout(function(){
		document.getElementById('can4-7').style.transformOrigin = "55% 55%";
	    document.getElementById('can4-7').style.animation = "valveturn-2 1.5s forwards ";
		document.getElementById('can4-8').style.transformOrigin = "20% 20%";
	    document.getElementById('can4-8').style.animation = "mymove1-1 1.5s forwards ";
		document.getElementById('can4-9').style.visibility="hidden";
		document.getElementById('can4-11').style.visibility="hidden";
		document.getElementById('can4-12').style.visibility="hidden";
		},1600);
		setTimeout(function(){
			document.getElementById('nextButton').style.visibility="visible";
		},2000);
}

	
function step5()
{
	myStopFunction();
	
	document.getElementById('can5-6').style.visibility="visible";
	document.getElementById('can5-7').style.visibility="visible";
	
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 635px; top: 250px; height: 50px; z-index: 10;";
			
	document.getElementById("arrow1").style.WebkitTransform = "rotate(-45deg)"; 
		// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(-45deg)"; 
		// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(-45deg)";
	
	document.getElementById('can5-7').onclick=function() { step51(); };
	
	
}

function step51()
{
	myStopFunction();
	
	document.getElementById('can5-7').style.transformOrigin = "14% 15%";
	document.getElementById('can5-7').style.animation = "valveturn-4 1.5s forwards ";
	setTimeout(function(){
		document.getElementById('can5-8w').style.visibility="visible";
		
	},700);
	setTimeout(function(){
		document.getElementById('can5-6').style.visibility="hidden";
		document.getElementById('can5-7').style.visibility="hidden";
	},1500);
	setTimeout(function(){
	if(flag==1)
	{
	     document.getElementById('can5-8wf').style.visibility="visible";
	}
	else if(flag==2)
	{
		document.getElementById('can5-8wh').style.visibility="visible";
	}
	else if(flag==3)
	{
		document.getElementById('can5-8wi').style.visibility="visible";
	}
	document.getElementById('can5-10b').style.transformOrigin = "80% 100%";
	document.getElementById('can5-10b').style.animation = "mymove1-2 1.5s forwards ";
	},1200);
	setTimeout(function(){
		document.getElementById('can5-9').style.visibility="visible";
	},1900);
	setTimeout(function(){
		document.getElementById('can5-11').style.visibility="visible";
		document.getElementById("can5-11").style.animation = "water-2 1s reverse";
	    document.getElementById("can5-11").style.transformOrigin = "80% 100%";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:255px; top: 120px; height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(270deg)";
	         document.getElementById('can5-3').onclick=function(){step52();}
	},2000);
	
}
function step52()
{
	myStopFunction();
	document.getElementById("can5-12").style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:560px; top: 110px;  height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		     // Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		     // Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";
	document.getElementById('can5-3').onclick="";
    document.getElementById('can5-12').onclick=function(){step53();}

}
function step53()
{
	refresh();
	   myStopFunction();
	document.getElementById('can5-12').style.transformOrigin = "20% 20%";
	document.getElementById('can5-12').style.animation = "valveturn-4 1.5s forwards ";
	document.getElementById('can5-10b').style.transformOrigin = "80% 100%";
	document.getElementById('can5-10b').style.animation = "mymove1-3 1.5s forwards ";

	setTimeout(function()
	{   
		 
			 document.getElementById('can5-12').style.visibility="hidden";
			 document.getElementById('nextButton').style.visibility="visible";
		 },2650);
}
	
	function step6()
	{
		myStopFunction();
		document.getElementById('can6-10').style.visibility="hidden"
		document.getElementById('can6-out').style.visibility="hidden";
		document.getElementById('can6-outoff').style.visibility="visible";
		setTimeout(function(){
	    document.getElementById("can6-4").style.animation = "water0 2.5s forwards";
	    document.getElementById("can6-8").style.transformOrigin = "50% 90%";
	    document.getElementById("can6-8").style.animation = "valveturn-5 2.5s forwards";
	    }, 500);
		setTimeout(function(){
			if(flag==1)
			 {
				document.getElementById('v6-1').innerHTML="Time taken by water to fill 5cm height, t = " +flat[1][lnt]+ "sec";
                document.getElementById('v6-2').innerHTML="Discharge, Q = " +flat[2][lnt]+ "cm<sup>3</sup>/sec"; 
			 }
			 else if(flag==2)
			 {
				document.getElementById('v6-1').innerHTML="Time taken by water to fill 5cm height, t = " +hemi[1][lnt]+ "sec";
                document.getElementById('v6-2').innerHTML="Discharge, Q = " +hemi[2][lnt]+ "cm<sup>3</sup>/sec"; 
			 }
			 else if(flag==3)
			 {
				document.getElementById('v6-1').innerHTML="Time taken by water to fill 5cm height, t = " +inclined[1][lnt]+ "sec";
                document.getElementById('v6-2').innerHTML="Discharge, Q = " +inclined[2][lnt]+ "cm<sup>3</sup>/sec"; 
			 }
		},3000);
		setTimeout(function(){
			document.getElementById('nextButton').style.visibility="visible";
		},3300);
	}
	
	
	function step8()
	{
		if(flag==1)
		{
			  
			  	
        $("#chartContainer").ejChart(
        {
 		    //Initializing Primary X Axis	
		    primaryXAxis:
            {
			    labelFormat: "{value}",
                title: { text: 'Theoretical force (N)' },
                range: { min: 0, max: 5, interval:1 }
            },	
			
			//Initializing Primary Y Axis	
            primaryYAxis:
            {
				
				labelFormat: "{value}",
                title: { text: 'Actual force (N)' },
                range: { min: 0, max: 5, interval: 1 }
				
               
            },	
			
			//Initializing Common Properties for all the series
           
            //Initializing Series				
            series: 
			[
			    {
                points: [
				{ x: flat[4][0], y: flat[5][0]},
				{ x: flat[4][1], y: flat[5][1]},
				{ x: flat[4][2], y: flat[5][2]}
			],
				type: 'spline',
					fill: "#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
					enableAnimation :true
                }
			],
             load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });

		}
		else if(flag==2)
		{
	  	
        $("#chartContainer").ejChart(
        {
 		    //Initializing Primary X Axis	
		    primaryXAxis:
            {
			    labelFormat: "{value}",
                title: { text: 'Theoretical force (N)' },
                range: { min: 0, max: 8, interval:1 }
            },	
			
			//Initializing Primary Y Axis	
            primaryYAxis:
            {
				
				 labelFormat: "{value}",
                title: { text: 'Actual force (N)' },
                range: { min: 0, max: 8, interval: 1 }
				
               
            },	
			
			//Initializing Common Properties for all the series
           
            //Initializing Series				
            series: 
			[
			    {
                points: [
				{ x: hemi[4][0], y: hemi[5][0]},
				{ x: hemi[4][1], y: hemi[5][1]},
				{ x: hemi[4][2], y: hemi[5][2]}
			],
				type: 'spline',
					fill: "#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
					enableAnimation :true
                }
			],
             load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });


		}
		 
        else if(flag==3)
		{
	  	
        $("#chartContainer").ejChart(
        {
 		    //Initializing Primary X Axis	
		    primaryXAxis:
            {
			    labelFormat: "{value}",
                title: { text: 'Theoretical force (N)' },
                range: { min: 0, max:1.4, interval:0.2 }
            },	
			
			//Initializing Primary Y Axis	
            primaryYAxis:
            {
				
				 labelFormat: "{value}",
                title: { text: 'Actual force (N)' },
                range: { min: 0, max: 1.4, interval: 0.2 }
				
               
            },	
			
			//Initializing Common Properties for all the series
           
            //Initializing Series				
            series: 
			[
			    {
                points: [
				{ x: inclined[4][0], y: inclined[5][0]},
				{ x: inclined[4][1], y: inclined[5][1]},
				{ x: inclined[4][2], y: inclined[5][2]}
			],
				type: 'spline',
					fill: "#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
					enableAnimation :true
                }
			],
             load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });


		}
		
	}

	
	

	function refresh()
	{
		document.getElementById("arrow1").style.WebkitTransform = ""; 
		 // Code for IE9
		document.getElementById("arrow1").style.msTransform = ""; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = ")";
		document.getElementById("can2-2").style.transformOrigin = "";
	    document.getElementById("can2-2").style.animation = "";
		document.getElementById("can2-3").style.transformOrigin = "";
	    document.getElementById("can2-3").style.animation = "";
	    document.getElementById("can2-4").style.animation = "";
		document.getElementById("can2-4").style.transformOrigin = "";
		document.getElementById("can2-6").style.animation = "";
		document.getElementById("can2-6").style.transformOrigin = "";
		document.getElementById("can4-13").style.animation = "";
		document.getElementById("can4-13").style.transformOrigin = "";
		document.getElementById("can4-7").style.animation = "";
		document.getElementById("can4-7").style.transformOrigin = "";
		document.getElementById("can4-8").style.animation = "";
		document.getElementById("can4-8").style.transformOrigin = "";
		document.getElementById("can5-10b").style.animation = "";
		document.getElementById("can5-10b").style.transformOrigin = "";
		document.getElementById("can5-7").style.animation = "";
		document.getElementById("can5-7").style.transformOrigin = "";
		document.getElementById("can6-8").style.animation = "";
		document.getElementById("can6-8").style.transformOrigin = "";
		document.getElementById("can6-4").style.animation = "";
		document.getElementById("can6-4").style.transformOrigin = "";
		document.getElementById('can5-12').style.transformOrigin = "";
		document.getElementById('can5-12').style.animation = "";
		document.getElementById('can5-10b').style.transformOrigin = "";
		document.getElementById('can5-10b').style.animation = "";

		document.getElementById('v4-1').innerHTML="";
		document.getElementById('v6-1').innerHTML="";
		document.getElementById('v6-2').innerHTML="";
		document.getElementById('v7-5').innerHTML="";
        document.getElementById('v7-6').innerHTML=""; 
		document.getElementById('v7-7').innerHTML="";
        document.getElementById('v7-8').innerHTML="";
    }
	

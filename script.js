$(document).ready(function(){
  
  // Initial position
  // Random absolute position top and left
  
 	var x = 5+Math.random()*75+'rem';
 	var y = 5+Math.random()*45+'rem'; 
 	$('#catchDiv').css({
 				   'top': y, 
 				   'left':x
 				   });
 				   
 	// trigger Animate mouseenter event
 	// move the target to another random position
 	
    $('#catchDiv').on('mouseenter', function(){
    	x = 5+Math.random()*75+'rem';
 	    y = 5+Math.random()*45+'rem'; 
    	$(this).animate({
    		   top:  y,
    		   left: x 
    		   },
    		   'fast'
    		   );
    });
 });

$.index.open();

function btnClick(e) {
   var toast = Ti.UI.createNotification({
        message: "Toast lol",
        duration: Ti.UI.NOTIFICATION_DURATION_LONG
    });
    
    toast.show(); 
}

function imgClick(e) {	
	$.image.animate({
		opacity:0,
		duration:300
	}, function(){
		$.image.animate({
			opacity:1,
			duration:500
		});	
	});	
}


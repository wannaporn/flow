var i = 0;
var pathImg = ["/images/11.jpg","/images/12.jpg","/images/13.jpg"];
function imgClick(e) {  
   
    if ( i >= pathImg.length - 1 ){
        i = -1;
    }
    
    $.slideme.animate({
        opacity:0,
        duration:300
    }, 
    function(){
        $.slideme.image = pathImg[i];
        $.slideme.animate({
            opacity:1,
            duration:400
        }); 
    }); 
    
    setTimeout(imgClick,1000);
    i++;
}


setTimeout(imgClick,2000);

$.index.open();



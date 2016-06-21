function doClick(e) {
	Titanium.API.info("You clicked the button");
    alert("Hi Paramade");
}

function doClick2(e) {
	Titanium.API.info("You clicked the picture");
    alert("I love chloe");
}

function nextPage1(e){
Alloy.createController('page1').getView().open();  
}

function nextPage2(e){
Alloy.createController('page2').getView().open(); 
}

function nextPage3(e){
Alloy.createController('page3').getView().open();  
}

$.index.open();

function doClick(e) {
	Titanium.API.info("You clicked the button");
    alert("Hi Paramade");
}
function doClick2(e) {
	Titanium.API.info("You clicked the picture");
    alert("I love chloe");
}

$.slider.text = $.slider.value;
function updateLabel(e){
    $.label.text = String.format("%3.1f", e.value);
}
$.win.open();

$.index.open();

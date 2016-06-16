function doClick(e) {
    alert("Goood");
}
function openWindow(e) {
     Alloy.createController('page3').getView();
     $.index.close();
}
$.index.open();

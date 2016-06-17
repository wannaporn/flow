function doClick(e) {
    alert($.label.text);
}

function animateOpen() {
    Alloy.createController('win2').getView().open({
        transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
    });
}
$.index.open();

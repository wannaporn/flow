function handleClick (e) {
	var section = $.list.sections[e.sectionIndex];
	var item = section.getItemAt(e.itemIndex);
	Alloy.createController(item.properties.id).getView();
}
$.index.open();


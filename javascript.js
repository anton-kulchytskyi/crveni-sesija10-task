function newElement() {
	let newItem = document.createElement("li");

	let textnode = document.createTextNode(document.getElementById("input").value);

	newItem.appendChild(textnode);
	

	let list = document.getElementById("myList");
	list.insertBefore(newItem, list.childNodes.lastChild);

	let span = document.createElement("span");
	let txt = document.createTextNode("\u00D7");
	
	span.style.paddingLeft = "7px";
	span.style.cursor = "pointer";

	span.appendChild(txt);
	newItem.appendChild(span);
  
	span.onclick = function() {
		let del = this.parentElement;
		del.style.display = "none";
	}
	
}
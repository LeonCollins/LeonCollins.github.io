function setHeight() {
	var el = document.getElementById("POne");
	el.object3D.position.y = document.getElementById("height").value;
}

function setColour() {
	var el = document.getElementById("POne");
	el.setAttribute('material', {color: document.getElementById("colour").value});
}

function setShape() {
	var el = document.getElementById("POne");
	el.setAttribute('geometry', {primitive: document.getElementById("shape").value});
}

function openOverlay() {
  document.getElementById("overlay").style.width = "100%";
}

function closeOverlay() {
  document.getElementById("overlay").style.width = "0%";
}
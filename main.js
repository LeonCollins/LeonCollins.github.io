function setHeight() {
	var el = document.getElementByID("POne");
	el.object3D.position.y = document.getElementByID("height").value;
}

function openOverlay() {
  document.getElementById("overlay").style.width = "100%";
}

function closeOverlay() {
  document.getElementById("overlay").style.width = "0%";
}
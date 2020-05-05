function setHeight() {
	var el = document.getElementById("POne");
	el.object3D.position.y = document.getElementById("height").value;
}

function openOverlay() {
  document.getElementById("overlay").style.width = "100%";
}

function closeOverlay() {
  document.getElementById("overlay").style.width = "0%";
}
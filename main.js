/*
var setupCount;
var boxesString = '{"tiles : [
{"number" : "1", "X" : "1", "Y" : "1"}
{"number" : "1", "X" : "1", "Y" : "1"}
{"number" : "1", "X" : "1", "Y" : "1"}
{"number" : "1", "X" : "1", "Y" : "1"}
{"number" : "1", "X" : "1", "Y" : "1"}
{"number" : "1", "X" : "1", "Y" : "1"}
{"number" : "1", "X" : "1", "Y" : "1"}
{"number" : "1", "X" : "1", "Y" : "1"}
{"number" : "1", "X" : "1", "Y" : "1"}
]"}';
*/

<script>
	AFRAME.registerComponent('ping', {

		init: function() {
			alert("terr");
		}
	});

	AFRAME.registerComponent('move', {
		init: function () {
    		// Set up the tick throttling.
    		this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
  		},

  		/**
   		* Tick function that will be wrapped to be throttled.
   		*/
  		tick: function (t, dt) {
  			var el = this.el;
		    var rotation = el.getAttribute('rotation');
		    this.el.object3D.rotation.x = rotation.x + 1;
		}
	});

	AFRAME.registerComponent('terr', {
		init: function() {
			var el = this.el;
			for (var i = 0; i < 1; i++) {
				var boxEl = document.createElement('a-entity');
				boxEl.setAttribute('geometry', {primitive: 'box'});
				boxEl.setAttribute('material', {color: 'black'});
	            boxEl.setAttribute('position', {x: 2, y: 2, z: 2});
	            boxEl.setAttribute('scale', {x: 2, y: 2, z: 2});
	            el.appendChild(boxEl);
			}
			alert("works 5");
		}
	});
</script>
<!--
	AFRAME.registerComponent('map', {
		init: function() {
			alert("in plane");
		    
	});

	var el = this.el;
		    alert("has plane");
		    for (var i = 0; i < 1; i++) {
		    	alert("in loop");
	            var boxEl = document.createElement('a-entity');
	            boxEl.setAttribute('geometry', {primitive: 'box'});
	            boxEl.setAttribute('material', {'color: black'});
	            boxEl.setAttribute('position', {x: 2, y: 2, z: 2});
	            boxEl.setAttribute('scale', {x: 2, y: 2, z: 2});
	            el.appendChild(boxEl);
	            alert("Adding");
	        }
	  	}
-->

<body style='margin : 0px; overflow: hidden;'>
	<a-scene embedded arjs='sourceType: webcam; detectionMode: mono_and_matrix; matrixCodeType: 3x3;'>
	<!--	
<a-marker type="pattern" preset="custom" url="https://leoncollins.github.io/qr-code.png">-->
		<a-marker type="barcode" value="1">
			<a-plane terr height="10" width="10" rotation="0 0 0" material='color: white;'></a-plane>
		</a-marker>




		<a-marker type="barcode" value="2">
			<a-box move position='0 0 3' height='2' width='2' depth ='2' material='color: red;'></a-box>
		</a-marker>

		

		<a-marker type="barcode" value="3">
			<a-box ping position='0 5 0' height='1' width='1' material='color: green;'></a-box>
		</a-marker>




		<a-marker type="barcode" value="4">
			<a-box position='0 0.5 0' height='10' width='10' material='color: blue;'></a-box>
		</a-marker>




		<a-entity camera></a-entity>
	</a-scene>
</body>
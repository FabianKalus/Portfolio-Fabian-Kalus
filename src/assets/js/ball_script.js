window.onload = function() {
	try {
	  TagCanvas.Start('myCanvas','tags',{
		textColour: '#2dfcd8',
		outlineColour: '#2dfcd8',
		reverse: true,
		depth: 0.8,
		maxSpeed: 0.05,
		textHeight: 20,
		weight: true,
		weightSize: 2.0,
		wheelZoom: false,
		
	  });
	} catch(e) {
	  // something went wrong, hide the canvas container
	  document.getElementById('myCanvasContainer').style.display = 'none';
	}
  };
window.onload = function() {
	try {
	  TagCanvas.Start('myCanvas','tags',{
		textColour: '#2dfcd8',
		outlineColour: '#fa2759',
		reverse: true,
		depth: 0.8,
		maxSpeed: 0.05
	  });
	} catch(e) {
	  // something went wrong, hide the canvas container
	  document.getElementById('myCanvasContainer').style.display = 'none';
	}
  };
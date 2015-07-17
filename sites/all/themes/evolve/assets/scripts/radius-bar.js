jQuery(document).ready(function() {
	//usage eg. <div class="radius-bar" data-percent="50" data-goal="100" ></div>
	var elArr = document.getElementsByClassName('radius-bar');
	// get canvas
	//set radiusvars colors
	var colorArr = ['#CC0000','#00A300','#0052CC','#E68A00'];
	var n = 0;
	//create a radius bar per element
	while (elArr[n]) {
		//set our current element to create a radius bar
		var el = elArr[n];
		//get our options from element, this are html properyies in element
		var options = {
			percent : el.getAttribute('data-percent') || 25,
			size : el.getAttribute('data-size') || 220,
			lineWidth : el.getAttribute('data-line') || 10,
			rotate : el.getAttribute('data-rotate') || 0,
			goal : el.getAttribute('data-goal') || 100
		}
		//create our canvas
		var canvas = document.createElement('canvas');
		var span = document.createElement('span');
		span.textContent = options.percent;// only if you want un comment + '%';

		if ( typeof (G_vmlCanvasManager) !== 'undefined') {
			G_vmlCanvasManager.initElement(canvas);
		}
		//create our radius bar
		var ctx = canvas.getContext('2d');
		canvas.width = canvas.height = options.size;

		el.appendChild(span);
		el.appendChild(canvas);

		ctx.translate(options.size / 2, options.size / 2);
		// change center
		ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);
		// rotate -90 deg

		//imd = ctx.getImageData(0, 0, 240, 240);
		var radius = (options.size - options.lineWidth) / 2;

		var drawCircle = function(color, lineWidth, percent) {
			percent = Math.min(Math.max(0, percent || 1), 1);
			ctx.beginPath();
			ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
			ctx.strokeStyle = color;
			ctx.lineCap = 'butt';// butt, round or square
			ctx.lineWidth = lineWidth
			ctx.stroke();
		};
		
		var color = colorArr.shift();
		colorArr.push(color);
		
		drawCircle('#ffffff', options.lineWidth, 100 / 100);//background circle color
		drawCircle(color, options.lineWidth, options.percent / options.goal);//radiusbar color
		n++;
	}
	
});

//your JS code here. If required.
let line = document.querySelector('#line');
let angle = 0;
function rotateLine() {
	angle++;
	line.style.transform = 'rotate('+ angle +'deg)';
	requestAnimationFrame(rotateLine);
}
rotateLine();
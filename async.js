
var cl = 0;

function frame() {
	cl++;
		if(cl >= 200){
		lupdate();
		cl = 0;
	}
	requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

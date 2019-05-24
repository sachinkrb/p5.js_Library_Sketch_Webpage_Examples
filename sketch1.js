
function setup() {
	canvas = createCanvas(200,200);
	bgcolor = color(200);
	button = createButton("Click here!");
	button.mousePressed(changeColor);
	
}
function changeColor() {
	bgcolor = color(random(255));
}

function draw() {
	//Animation loop is going on here. Static coding dont make it visible.
	//clear();
	background(bgcolor);
	fill(255, 0, 0);
	rect(100, 100, 50, 50);	
}
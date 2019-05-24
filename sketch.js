var h1;
var canvas;
var x = 100;
var y = 100;
function setup() {
	canvas = createCanvas(200,200);
	canvas.position(400,500); //Absolute positioning
	h1 = createElement('h1','Waiting......'); 
	//h1.position(400, 600);
	createP("Im inserting this paragraph using js");
}

function mousePressed() {
	h1.html("Here is your favorite number")
	createP("Stop clicking if you dont want to clone me!");
	createP("Here is a random number for you " + random(0,100));
}

function draw() {
	//Animation loop is going on here. Static coding dont make it visible.
	//clear();
	background(200);
	fill(255, 0, 0);
	rect(x, y, 50, 50);	//Positioned Relative to canvas
	h1.position(x,y) //Positioned Reative to the DOM element
	x = x + random(-5, 5);
}
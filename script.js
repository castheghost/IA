const c = document.getElementById("myCanvas");
const myCanvas = c.getContext("2d");

myCanvas.lineWidth = 5;
myCanvas.lineJoin = 'round';
myCanvas.lineCap = 'round';

class StickFigure {

  constructor() {
    this.headx = 200;
    this.heady = 100;
    this.headr = 25;
    
    this.x1 = 200;
    this.y1 = 150;
    
    this.x2 = 178;
    this.y2 = 178;
    
    this.x3 = 150;
    this.y3 = 200;
    
    this.x4 = 222;
    this.y4 = 178;
    
    this.x5 = 250;
    this.y5 = 200;
    
    this.x6 = 200;
    this.y6 = 240;
    
    this.x7 = 175;
    this.y7 = 275;
    
    this.x8 = 150;
    this.y8 = 300;
    
    this.x9 = 225;
    this.y9 = 275;
    
    this.x10 = 250;
    this.y10 = 300;

  }
  
  changeHead(x, y) {
  	this.headx += x;
    this.heady += y;
    return;
  }

  change1(x, y) {
  	this.x1 += x;
    this.y1 += y;
  	return;
  }
  
  change2(x, y){
  	this.x2 += x;
    this.y2 += y;
    return;
  }
  
  change3(x, y){
    this.x3 += x;
    this.y3 += y;
    return;
  }
  
  change4(x, y){
    this.x4 += x;
    this.y4 += y;
    return;
  }
  
  change5(x, y){
    this.x5 += x;
    this.y5 += y;
    return;
  }
  
  change6(x, y) {
    this.x6 += x;
    this.y6 += y;
    return;
  }
  
  change7(x, y) {
    this.x7 += x;
    this.y7 += y;
    return;
  }
  
  change8(x, y) {
    this.x8 += x;
    this.y8 += y;
    return;
  }
  
  change9(x, y) {
    this.x9 += x;
    this.y9 += y;
    return;
  }
  
  change10(x, y) {
    this.x10 += x;
    this.y10 += y;
    return;
  }
  
  draw() {
  	line(this.x1, this.y1, this.x2, this.y2);
		line(this.x2, this.y2, this.x3, this.y3);
		line(this.x1, this.y1, this.x4, this.y4);
		line(this.x4, this.y4, this.x5, this.y5);
		line(this.x1, this.y1, this.x6, this.y6);
		line(this.x6, this.y6, this.x7, this.y7);
		line(this.x7, this.y7, this.x8, this.y8);
		line(this.x6, this.y6, this.x9, this.y9);
		line(this.x9, this.y9, this.x10, this.y10);
		circle(this.headx, this.heady, this.headr);
  }

}
function line(x1, y1, x2, y2) {
	myCanvas.beginPath();
  myCanvas.moveTo(x1, y1);
  myCanvas.lineTo(x2, y2);
  myCanvas.stroke();
}
function circle(x, y, r) {
	myCanvas.beginPath();
  myCanvas.arc (x, y, r, 0, 2*Math.PI);
	myCanvas.stroke();           
}


//create array of keyframes and define each (also applies transformation to each for now, until drag and drop editing is finished)
let frames = [];
for (var i = 0; i <= 10; i++) {
	let frame = new StickFigure();
  frame.change4(2*i, -2*i);
  frame.change5(2*i, -6*i);
  frames[i] = frame;
}

interval = setInterval(doStuff, 100);

//draws each frame
var f = 0;
function doStuff() {
	myCanvas.clearRect(0, 0, 400, 400);
  frames[f].draw();
  f++;
  if (f >= frames.length) {
  	clearInterval(interval);
  }
}

/*var headx = 200;
var heady = 100;
var headr = 25;

var x1 = 200;
var y1 = 150;

var x2 = 178;
var y2 = 178;

var x3 = 150;
var y3 = 200;

var x4 = 222;
var y4 = 178;

var x5 = 250;
var y5 = 200;

var x6 = 200;
var y6 = 240;

var x7 = 175;
var y7 = 275;

var x8 = 150;
var y8 = 300;

var x9 = 225;
var y9 = 275;

var x10 = 250;
var y10 = 300;

line(x1, y1, x2, y2);
line(x2, y2, x3, y3);
line(x1, y1, x4, y4);
line(x4, y4, x5, y5);
line(x1, y1, x6, y6);
line(x6, y6, x7, y7);
line(x7, y7, x8, y8);
line(x6, y6, x9, y9);
line(x9, y9, x10, y10);
circle(headx, heady, headr);

*/

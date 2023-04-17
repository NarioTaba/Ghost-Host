a = 100
b = 100
let x = 1;
let y = 1;
let easing = 0.05;
var xoffset = -200;
var yoffset = -200;
var xpos;
var ypos;


function setup() {
  createCanvas(1495, 665);
}

function draw() {
  background(100, 100, 100);
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;
  xpos = x+xoffset;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;
  ypos = y+yoffset;

  noStroke();
  fill (a, a, b)
  ellipse(200+xpos, 150+ypos, 100, 100);
  rect(150+xpos, 150+ypos, 100, 75)
  triangle(150+xpos, 220+ypos, 150+xpos, 250+ypos, 170+xpos, 220+ypos);
  triangle(170+xpos, 220+ypos, 190+xpos, 250+ypos, 210+xpos, 220+ypos);
  triangle(200+xpos, 220+ypos, 220+xpos, 250+ypos, 240+xpos, 220+ypos);
  triangle(230+xpos, 220+ypos, 250+xpos, 250+ypos, 250+xpos, 220+ypos);
  fill ('white')
  circle(181+xpos, 142+ypos, 28)
  circle(221+xpos, 142+ypos, 28)
  fill ('black')
  let c2 = map(mouseX, 5, width, 0, 12);
  let c3 = map(mouseY, 5, width, 0, 20);
  circle(c2+xpos+177, c3+ypos+142, 12)
  circle(c2+xpos+217, c3+ypos+142, 12)
}

function mousePressed (){
  a = 122
  b = 165
}

function setup(){
  var canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
}

function windowResized(){
resizeCanvas(windowWidth,windowHeight);
}

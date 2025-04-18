let angle = 0;
let img
let img2
let starSphereSize

function preload() {
  img = loadImage('images/text3.jpg');  
  img2 = loadImage('images/pinkglit-text1.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  background(158, 204, 248);
  orbitControl();

  rotateY(angle);
  translate(25, 0, 100);
  noFill();
  noStroke();
  texture(img);
  sphere(windowHeight/4, 400, 100);
  
  translate(250, 0, 200);
  strokeWeight(0.7);
  noFill();
  stroke(0, 0, 0);
  sphere(100, 20, 10);
  

  rotateZ(angle*3);
  translate(-300, 0, 160);
  noStroke();
  texture(img2);
  sphere(80, 400, 100);

  angle= angle + 0.4;  // Increment the angle for rotation

  // rotateY(angle*0);
  // translate(0, 0, 0);
  // strokeWeight(5);
  // noFill();
  // stroke(255, 160, 204);
  // sphere(1800, 20, 10);
}
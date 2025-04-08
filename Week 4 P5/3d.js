let angle = 0;
let img
let img2
let starSphereSize

function preload() {
  img = loadImage('images/watertext1.jpg');  
  img2 = loadImage('images/watertxt2.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  angleMode(DEGREES);
}

function draw() {
background (198, 247, 247);  
  orbitControl();


  starSphereSize = width > height ? width : height
  // create the starfield sphere
  push()
  noStroke();
  texture(img);
  translate(0, 0, 100);
  rotateY(millis() / 100000);
  sphere(starSphereSize);
  pop();

  rotateY(angle);
  
  translate(25, 0, 100);
  strokeWeight(0.3);
  noFill();

noStroke();
  texture(img2);
  sphere(150);

  translate(250, 0, 200);
  noFill();
  stroke(0, 255, 0);
  sphere(100, 20, 10);

  rotateY(angle*-3);
  translate(-500, 0, 200);
noStroke();
  texture(img);
  sphere(50, 20, 10);

  angle= angle + 0.5;  // Increment the angle for rotation
}
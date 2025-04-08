

let topImg;

function preload() {
 topImg = loadImage('images/scribles.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0); 
  topImg.resize(width, height); // Resize to fit the canvas
}

function draw() {
  // Copy a small portion from topImg to the canvas as you drag
  // copy(topImg, mouseX, mouseY, 10, 10, mouseX, mouseY, 10, 10);

  stroke(mouseX, mouseY, 150);
line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyPressed() {
  background(0); // Clear the canvas
}

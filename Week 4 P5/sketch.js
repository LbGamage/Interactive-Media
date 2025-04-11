

let kusama, topImg, port, slave, learn;

function preload() {
 topImg = loadImage('images/heart-doodle.webp');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0); 
  //topImg.resize(width, height); // Resize to fit the canvas

  let linkedImg = createImg('images/heart-doodle.webp', 'clickable heart');

  // Resize it if needed
  linkedImg.size(100, 100); // or any size you like


  linkedImg.position(random(windowWidth-100), random(windowHeight-100));

  // Style it
  linkedImg.style('cursor', 'pointer');

  // Link it to another URL
  linkedImg.mousePressed(() => {
    window.open('self-potraint.html', '_blank');
  });
}

function draw() {

  if (mouseIsPressed) {
    let x = map(mouseX, 0, width, 0, 255); // Map mouseX to a color value
    let y = map(mouseY, 0, width, 0, 255);
    stroke(x, y, 150); // Set stroke color based on mouse position
    line(mouseX, mouseY, pmouseX, pmouseY); 
  }

;}

function keyPressed() {
  if (key === ' ') {
     background(0); // Clear the canvas
  }
}

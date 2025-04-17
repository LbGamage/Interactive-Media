

let kusama, topImg, port, slave, learn;

function preload() {
 topImg = loadImage('images/heart-doodle.png');
 kusama = loadImage('images/smile-doodle.png');
 port = loadImage('images/heart-doodle.png');
 slave = loadImage('images/spiral doodle.png');
 learn = loadImage('images/flower-doodle.png');
 title = loadImage('images/week-4 header.png');
}

function setup() {
  let canvas = createCanvas(windowWidth / 1.03, windowHeight / 1.04);
  canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
  background(0); 
  // Function to create a clickable image
  function createClickableImage(imgPath, altText, link, width, height) {
    let linkedImg = createImg(imgPath, altText);
    // Resize it if needed
    linkedImg.size(width, height);
    linkedImg.position(random(windowWidth - width), random(100,windowHeight - height));
    linkedImg.style('cursor', 'pointer');
    // Link it to another URL
    linkedImg.mousePressed(() => {
      window.open(link, '_blank');
    });
  }

  // Create clickable images for each preloaded image. Co-pilot helped to edit this function so it applies to all images.
  createClickableImage('images/heart-doodle.png', 'clickable heart', 'self-potraint.html', 150, 150);
  createClickableImage('images/smile-doodle.png', 'clickable smile', 'self-potraint.html', 150, 150);
  createClickableImage('images/spiral doodle.png', 'clickable spiral', '8ball.html', 150, 150);
  createClickableImage('images/flower-doodle.png', 'clickable flower', 'kusama.html', 150, 150);

  let titleImg = createImg('images/week-4 header.png', 'title');
  titleImg.size(450,450* (8 / 37)); //used chat to figure out the ratio for this image
  titleImg.position(50, 20);
}

function draw() {

  if (mouseIsPressed) {
    let x = map(mouseX, 0, width, 0, 255); // Map mouseX to a color value
    let y = map(mouseY, 0, width, 0, 255);
    stroke(x, y, 100); // Set stroke color based on mouse position
    strokeWeight(2); // Set stroke weight
    line(mouseX, mouseY, pmouseX, pmouseY); 
  }

;}

function keyPressed() {
  if (key === ' ') {
     background(0); // Clear the canvas
     
  }
}

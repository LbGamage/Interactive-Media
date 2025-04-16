let circles = [];

function setup() {
  let canvas = createCanvas(windowWidth / 1.1, windowHeight / 1.2);
  canvas.position((windowWidth - width) / 5, (windowHeight - height) / 4);
  let bg = color(0, 0, 0);
  bg.setAlpha(220); 
  background(bg);
}

function draw() {
 
  let y = map(mouseY, 0, height, 0, 255);
  fill( 255, y, 0);
  noStroke();
  
  
  // Loop through each circle
  for (let i = 0; i < circles.length; i++) {
    let d = dist(mouseX, mouseY, circles[i].x, circles[i].y);
    let scaleFactor = map(d, 0, width, 0.1, 2);  // Scale based on mouse distance

    // Draw each circle with scaled size
    push();
    translate(circles[i].x, circles[i].y);
    scale(scaleFactor);
    ellipse(0, 0, circles[i].size, circles[i].size); 
     // Draw circle
    pop();
  }
}

function mousePressed() {
  circles = [];
  for (let i = 0; i < 100; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(20, 100)
    });
  }
  let bg = color(0, 0, 0);
  bg.setAlpha(220); 
  background(bg);


}

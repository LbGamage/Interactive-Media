// let circles = [];

// function setup() {
//   createCanvas(windowWidth, windowHeight);

//   // Create random circles with random positions

// }

// function draw() {
//   background(237, 231, 213);  // Clear the background every frame

//   fill(230, // Red channel for pink/purple shades
//   map(mouseY, 0, height, 50, 100), // Green stays low to keep it in blue/pink/purple range
//   map(mouseX + mouseY, 0, width + height, 150, 255));
//   noStroke();
  
  
//   // Loop through each circle
//   for (let i = 0; i < circles.length; i++) {
//     let d = dist(mouseX, mouseY, circles[i].x, circles[i].y);
//     let scaleFactor = map(d, 0, width, 0.1, 2);  // Scale based on mouse distance

//     // Draw each circle with scaled size
//     push();
//     translate(circles[i].x, circles[i].y);
//     scale(scaleFactor);
//     ellipse(0, 0, circles[i].size, circles[i].size); 
//      // Draw circle
//     pop();
//   }
// }

// function mousePressed() {
//   circles = [];
//   for (let i = 0; i < 50; i++) {
//     background(237, 231, 213);  
//     circles.push({
//       x: random(width),
//       y: random(height),
//       size: random(20, 100)
//     });
//   }
//   background(237, 231, 213);  

// }


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

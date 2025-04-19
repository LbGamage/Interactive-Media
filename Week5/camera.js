let capture; 

function setup() {
let canvas = createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide();
  capture.size(windowWidth/4, windowHeight/3);
}


function draw() {
background(0);

push();
image(capture, 800, 0);
filter(BLUR, 3);
pop();

push();
image(capture, 400, 0);
filter(THRESHOLD);
pop();

push();
image(capture, 0, 0);
filter(GRAY);
pop();

push();
image(capture, 0, 300);
filter(INVERT);
pop();

push();
image(capture, 400, 300);
filter(POSTERIZE, 3);
pop();

push();
image(capture, 800, 300);
filter(ERODE);
pop();

}
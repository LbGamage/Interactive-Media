var font;
let points = [];


function preload(){
  font = loadFont('Perfect DOS VGA 437 Win.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  points = font.textToPoints("Week 4", 
width/2-400, 
height/2, 144,{sampleFactor:0.2});//level of detail

}


function draw() {
  let xMapped = map(mouseX, 0, width, 4, 32);
  for (let p of points){
    noStroke();
    fill(120);
    rect(p.x,p.y,xMapped);
  };

}
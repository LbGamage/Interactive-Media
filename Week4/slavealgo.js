//Base code was from https://editor.p5js.org/kmaschmeyer/sketches/DuUtDVOg1
//remixed it a bit and changed the design.

var my8Ball; 
var myFortune = "";

var myFortuneArray = ["Yes!",
  "No",
  "Maybe so",
  "Try Therapy",
  "Absolutely!",
  "Take a nap",
  "Matcha? :D"
];

function preload() {
  my8Ball = loadImage("images/8ball.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0);
  imageMode(CENTER);
  image(my8Ball, windowWidth/2, windowHeight/1.8, windowHeight, windowHeight);
  textAlign(CENTER);
  textSize(windowHeight / 22);
  fill(0);
  text(myFortune, windowWidth/1.95, windowHeight/2.1);

}

function mousePressed() {
  myFortune = random(myFortuneArray);
}
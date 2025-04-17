var my8Ball; // variable to store 8 ball image

// variable to store the fortune that is picked
var myFortune = "";

// the list of possible fortunes
var myFortuneArray = ["Yes!",
  "No",
  "Maybe so",
  "Ask again",
  "Absolutely!"
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
  image(my8Ball, windowWidth/2, windowHeight/2, windowHeight, windowHeight);
  //display instructions
  textAlign(CENTER);
  textSize(windowHeight / 22);
  fill(0);
  text(myFortune, windowWidth/1.9, windowHeight/2.1);

}

// when mouse is pressed, set my fortune to a random choice from my fortune list and make the ellipse fully opaque

function mousePressed() {
  myFortune = random(myFortuneArray);
}
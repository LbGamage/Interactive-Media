// https://editor.p5js.org/nikiafenix/sketches/plkcniKMn by Nikiafenix

let noiseScale = .01

function setup(){
  background(0);
  createCanvas(windowWidth,windowHeight)
}

function draw(){
for (let x=0; x<width; x++){
  let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
  stroke(noiseVal*255,random(0,255),255);
  line(x,mouseY+noiseVal*80,x,height);
}
}
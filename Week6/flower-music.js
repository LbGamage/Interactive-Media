//Base from tutorial. Used chatCPT in order to create the flowerpetals
var song, analyzer, vol, grow;

function preload() {
  song = loadSound('music/plants.mp3'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  analyzer = new p5.Amplitude();
  analyzer.setInput(song); 


}

function draw() {
  background('#AEC289');

  vol = analyzer.getLevel(); 

  grow = map(vol, 0, 0.3, 0, 1); 

  flowerSize = map(vol, 0, 0.3, 50, 200, true);
 //ChatGPT was used to fix a bug, had issues with the rotate function when creating the flower petals
  push();
  translate(width / 2, height / 2);
  stroke('#67471A');
  fill('#F8ABA1');
  for (let i = 0; i < 5; i++) {
    ellipse(0, flowerSize / 2, flowerSize, flowerSize);
    rotate(TWO_PI / 5);
  }

  fill('#FACD56');
  ellipse(0, 0, flowerSize / 2, flowerSize / 2);
  pop();

}

function mousePressed() {
    getAudioContext().resume();
    if (song.isPlaying() == true) {
      song.stop();
    } else {
      song.play();
      song.loop();
    }
  }
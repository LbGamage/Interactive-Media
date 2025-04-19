
var song, analyzer, vol, grow;

function preload() {
  song = loadSound('music/plants.mp3'); // Add your audio file here
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  analyzer = new p5.Amplitude(); // Create amplitude analyzer
  analyzer.setInput(song); // Hook the song into the amplitude analyzer

  // Your other setup stuff here
}

function draw() {
  background('#AEC289');

  vol = analyzer.getLevel(); // Volume level (0 to ~1)
  // Use volume to drive animation
  grow = map(vol, 0, 0.3, 0, 1); // Adjust the max value based on your song's levels

  flowerSize = map(vol, 0, 0.3, 50, 200, true);
  // Draw a simple flower with 5 petals
  push();
  translate(width / 2, height / 2);
  stroke('#67471A');
  fill('#F8ABA1');
  for (let i = 0; i < 5; i++) {
    ellipse(0, flowerSize / 2, flowerSize, flowerSize);
    rotate(TWO_PI / 5);
  }
  // Center of flower
  fill('#FACD56');
  ellipse(0, 0, flowerSize / 2, flowerSize / 2);
  pop();

  // OR use `growth` to tweak growthPercent in your L-System, etc.
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
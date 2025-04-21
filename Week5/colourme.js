let bottomImg, topImg, topResized;

function preload() {
    topImg = loadImage('./images/colour.png');
    bottomImg = loadImage('./images/bw.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255, 255, 0);

    topImg.resize(width, height);
    image(bottomImg, 0, 0, width, height);
}

function mouseDragged() {
    copy(topImg, mouseX, mouseY, 80, 80, mouseX, mouseY, 80, 80);
}

// from workshop/tutorial
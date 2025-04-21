//I found the source code here:
// https://editor.p5js.org/sugr7650/sketches/Uy92dnkSb by sugr7650
//  https://editor.p5js.org/lingdong/sketches/ef6FB-uNq for use of facemesh.js  
// https://editor.p5js.org/Mithru/sketches/Hk1N1mMQg for heart shape

// keypoints list here
// https://github.com/tensorflow/tfjs-models/blob/master/facemesh/src/keypoints.ts#L21

// A choice for number of keypoints: 7,33,68,468
// uncomment line for # of keypoints you wanna use
// === bare minimum 7 points ===
// var VTX = VTX7;

// === important facial feature 33 points ===
// var VTX = VTX33;

// === standard facial landmark 68 points ===
// var VTX = VTX68;

// setup facemesh
var VTX = VTX468;

var TRI;
if (VTX == VTX7){
  TRI = TRI7;
}else if (VTX == VTX33){
  TRI = TRI33;
}else if (VTX == VTX68){
  TRI = TRI68;
}else{
  TRI = TRI468;
}

// setup filters
var filterArray = [
  heartFilter
]

let q = 0;

var silhouette = [
  10,  338, 297, 332, 284, 251, 389, 356, 454, 323, 361, 288,
  397, 365, 379, 378, 400, 377, 152, 148, 176, 149, 150, 136,
  172, 58,  132, 93,  234, 127, 162, 21,  54,  103, 67,  109
];

var facemeshModel = null;
var videoDataLoaded = false;
var statusText = "Loading facemesh model...";
var myFaces = [];
var capture;

facemesh.load().then(function(_model){
  console.log("model initialized.")
  statusText = "Model loaded."
  facemeshModel = _model;
})

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
  capture = createCapture(VIDEO);

  capture.elt.onloadeddata = function(){
    console.log("video initialized");
    videoDataLoaded = true;
  }

  capture.hide();
}

function drawFaces(faces, filled){
  for (var i = 0; i < faces.length; i++){
    const keypoints = faces[i].scaledMesh;
    filterArray[q](keypoints)
  }
}

function packFace(face, set){
  var ret = {
    scaledMesh:[],
  }
  for (var i = 0; i < set.length; i++){
    var j = set[i];
    ret.scaledMesh[i] = [
      face.scaledMesh[j][0],
      face.scaledMesh[j][1],
      face.scaledMesh[j][2],
    ]
  }
  return ret;
}

function draw() {
  if (facemeshModel && videoDataLoaded){
    facemeshModel.estimateFaces(capture.elt).then(function(_faces){
      myFaces = _faces.map(x=>packFace(x,VTX));
      if (!myFaces.length){
        statusText = "Show some faces!"
      }else{
        statusText = "Confidence: "+ (Math.round(_faces[0].faceInViewConfidence*1000)/1000);     
      }
    })
  }

  background(0);
  
  push();
  scale(-1,1)
  image(capture,-capture.width/2, -capture.height/2);
  noFill();
  stroke(255,0,0);
  pop()
  
  drawFaces(myFaces);
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

function heartFilter(keypoints) {
  push()
  //left cheekbone keypoints
  lcbx = keypoints[280][0] 
  lcby = keypoints[280][1]
  lcbz = keypoints[280][2]
  fill(255,0,0)
  translate(-lcbx,lcby,-lcbz*0.5) //translate to whichever keypoint we want
  scale(-1,1) 
  translate(-capture.width/2,-capture.height/2,10) //move forward on z axis so that box doesn't disappear 
  noStroke()
  heart(0,0,15)
  pop()
    
  push()
  //right cheekbone keypoints 
  rcbx = keypoints[50][0] 
  rcby = keypoints[50][1]
  rcbz = keypoints[50][2]
  fill(255,0,0)
  translate(-rcbx,rcby,-rcbz*0.5) //translate to whichever keypoint we want
  scale(-1,1) 
  translate(-capture.width/2,-capture.height/2,10) //move forward on z axis so that box doesn't disappear 
  noStroke()
  heart(0,0,15)
  pop()
    
  push()
  rectMode(CENTER);
  heartColor = color(226,71,103)
  heartColor.setAlpha(70)
  fill(heartColor)
  noStroke()
  // color tint over webcam
  rect(0,0, capture.width, capture.height)
  pop()  
}


function keyPressed() {
  if (keyCode === LEFT_ARROW && q > 0) {
    q -= 1;
  } else if (keyCode === RIGHT_ARROW && q < filterArray.length - 1) {
    q += 1;
  }
  console.log(q)
}

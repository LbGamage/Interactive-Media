// utilizing
// https://editor.p5js.org/lingdong/sketches/ef6FB-uNq for use of facemesh.js  
// https://editor.p5js.org/Mithru/sketches/Hk1N1mMQg for heart shape

// keypoints list here
// https://github.com/tensorflow/tfjs-models/blob/master/facemesh/src/keypoints.ts#L21


// ======== setup facemesh ========
// setup which facemesh we will use (full 468 point)
var VTX = VTX468;
// select the right triangulation based on vertices
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

// ======== setup filters ========
//list of filters
var filterArray = [
  heartFilter
]
//for iterating through list of filters
let q=0

// ==== setup our keypoint variables ====
//face silhouette keypoints
var silhouette = [
    10,  338, 297, 332, 284, 251, 389, 356, 454, 323, 361, 288,
    397, 365, 379, 378, 400, 377, 152, 148, 176, 149, 150, 136,
    172, 58,  132, 93,  234, 127, 162, 21,  54,  103, 67,  109
  ]
// upper lip keypoints
var upperLip = [
  61, 185, 40, 39, 37, 0, 267, 269, 270, 409, 291,
  308, 415, 310, 311,312, 13, 82, 81, 80, 191, 78
]
// lower lip keypoints
var lowerLip = [
  146, 91, 181, 84, 17, 314, 405, 321, 375, 291,
  308, 324, 318, 402, 317, 14, 87, 178, 88 ,95, 78
]

var facemeshModel = null; // this will be loaded with the facemesh model
                          // WARNING: do NOT call it 'model', because p5 already has something called 'model'

var videoDataLoaded = false; // is webcam capture ready?

var statusText = "Loading facemesh model...";

var myFaces = []; // faces detected in this browser
                  // currently facemesh only supports single face, so this will be either empty or singleton

var capture; // webcam capture, managed by p5.js

// Load the MediaPipe facemesh model assets.
facemesh.load().then(function(_model){
  console.log("model initialized.")
  statusText = "Model loaded."
  facemeshModel = _model;
})


function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
  capture = createCapture(VIDEO);
  
  // this is to make sure the capture is loaded before asking facemesh to take a look
  // otherwise facemesh will be very unhappy
  capture.elt.onloadeddata = function(){
    console.log("video initialized");
    videoDataLoaded = true;
  }
  
  capture.hide();

}

////////////////////////////////////////////////////////////////////////
// get keypoints and draw filter
////////////////////////////////////////////////////////////////////////
function drawFaces(faces,filled){

  for (var i = 0; i < faces.length; i++){
    const keypoints = faces[i].scaledMesh;
    
    filterArray[q](keypoints)
  }
}

// reduces the number of keypoints to the desired set 
// (VTX7, VTX33, VTX68, etc.)
function packFace(face,set){
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
//  strokeJoin(ROUND); //otherwise super gnarly; doesn't work in WEBGL mode
  
  if (facemeshModel && videoDataLoaded){ // model and video both loaded, 
    
    facemeshModel.estimateFaces(capture.elt).then(function(_faces){
      // we're faceling an async promise
      // best to avoid drawing something here! it might produce weird results due to racing
      
      myFaces = _faces.map(x=>packFace(x,VTX)); // update the global myFaces object with the detected faces

      // console.log(myFaces);
      if (!myFaces.length){
        // haven't found any faces
        statusText = "Show some faces!"
      }else{
        // display the confidence, to 3 decimal places
        statusText = "Confidence: "+ (Math.round(_faces[0].faceInViewConfidence*1000)/1000);     
      }
    })
  }
  
  background(255);
  
//   // first draw the debug video and annotations
//   push();
//   scale(-1,1)
//   image(capture,-capture.width, -capture.height);
//   noFill();
//   stroke(255,0,0);
//   pop()
//   drawFaces(myFaces); // draw my face skeleton
  
// }

////////////////////////////////////////////////////////////////////////
// Draw heart
//borrowed from https://editor.p5js.org/Mithru/sketches/Hk1N1mMQg
////////////////////////////////////////////////////////////////////////
function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

////////////////////////////////////////////////////////////////////////
//draws a heart over each cheekbone and tints video reddish/pinkish
////////////////////////////////////////////////////////////////////////
function heartFilter(keypoints) {
  push()
  //left cheekbone keypoints
  lcbx = keypoints[280][0] 
  lcby = keypoints[280][1]
  lcbz = keypoints[280][2]
  fill(255,0,0)
  translate(-lcbx,lcby,-lcbz*0.5) //translate to whichever keypoint we want
  scale(-1,1) 
  translate(-capture.width,-capture.height,10) //move forward on z axis so that box doesn't disappear 
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
  translate(-capture.width,-capture.height,10) //move forward on z axis so that box doesn't disappear 
  noStroke()
  heart(0,0,15)
  pop()
    
  push()
  rectMode(CENTER);
  heartColor = color(226,71,103)
  heartColor.setAlpha(40)
  fill(heartColor)
  noStroke()
  // color tint over webcam
  rect(0,-capture.height, windowWidth, windowHeight)
  pop()  
}



//////////////////////////////////////////////////////////////////////////////////////
// used to iterate through the list of filters
//////////////////////////////////////////////////////////////////////////////////////
function keyPressed(keypoints) {
  if (keyCode === LEFT_ARROW && q>0) {
    q-=1;
  } else if (keyCode === RIGHT_ARROW && q< filterArray.length-1) {
    q +=1;
  }
  console.log(q)
}
}

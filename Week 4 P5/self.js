//the code for how to make the eyes follow the mouse is from Eyes following cursor by koolaid_krusade (https://editor.p5js.org/koolaid_krusade/sketches/JHBnC1wLR)

var mainX, mainY, d;

function setup() {
    createCanvas (windowWidth, windowHeight);
      background(116, 161, 46);
     noStroke();
   }
   
   
   function draw() {
    noStroke();

    mainX = windowWidth/2;
    mainY = windowHeight/2;
    d = 90; 

  let x1 = map(mouseX, 0, width, mainX-70 - d/6, mainX-70 + d/6, true);
  let x2 = map(mouseX, 0, width, mainX+70 - d/6, mainX+70 + d/6, true);
  let y = map(mouseY, 0, height, mainY-70 - d/6, mainY-70 + d/6, true);

  fill(0);
  rect(windowWidth/2,windowHeight/2.9, 229, 450);
  rect(windowWidth/2,windowHeight/2.9, -229, 450);
  fill(130, mouseX, mouseY);
  rect(mainX-230,windowHeight/2.9+350, 459, 100);


    fill(130, 96, 65);
     ellipse(windowWidth/2,windowHeight/2,400, 500);
     fill(0);
  // Eye balls
  fill(255);
  circle(mainX-70, mainY, d);
  circle(mainX+70, mainY, d);

  // Iris
  fill(49, 34, 3);
  circle(x1, y+70, 45);
  circle(x2, y+70, 45);
  
  // Pupils
  fill(0);
  circle(x1, y+70, 30);
  circle(x2, y+70, 30);


 // Nose
 fill(49, 34, 3);
 triangle(mainX+0, mainY+40, mainX+30, mainY+90, mainX, mainY+90);

    //mouth
    fill(242, 86, 78);
     arc(windowWidth/2,windowHeight/1.5,100, 100, 0, PI);

     //bangs and front hair
     fill(0,0,0);
     arc(mainX, mainY-100,460, 390, PI, 0);
     rect(mainX+150, mainY-110, 50, 380);
     rect(mainX-200, mainY-110, 50, 380);
     
     

   }





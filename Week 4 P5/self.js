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
    //  triangle(mainX-230, mainY-260, mainX-90, mainY-0, mainX-20, mainY-260);
    //  triangle(mainX+230, mainY-260, mainX-0, mainY-260, mainX+180, mainY-2);



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

  
   
   
  //    fill(130, 96, 65);
  //    ellipse(windowWidth/2,windowHeight/2,400, 500);
     
  //    fill(242, 86, 78);
  //    arc(windowWidth/2,windowHeight/1.5,100, 100, 0, PI);
  //    //arc(windowWidth / 2 - 25, windowHeight / 2 + 130, 50, 30, PI, 0);
  //    //arc(windowWidth / 2 +25, windowHeight / 2 + 130, 50, 30, PI, 0);
  //    fill(255);
  //    ellipse(windowWidth/2.3,windowHeight/2,80, 80);
  //    ellipse(windowWidth/1.8,windowHeight/2,80, 80);
     
    


  //      fill(0,0,0);
  //    ellipse(windowWidth/2.3,windowHeight/2.1,50, 50);
  //    ellipse(windowWidth/1.8,windowHeight/2,50, 50);
  //    triangle(windowWidth/2,windowHeight/1.9,windowWidth/2+20,480,windowWidth/2+50,480);
     
  
     
  //     fill(0);
  //  rect(windowWidth/2+150,windowHeight/2.9, 50, 380);
  //  rect(windowWidth/2-200,windowHeight/2.9, 50, 380);  fill(0);
   }





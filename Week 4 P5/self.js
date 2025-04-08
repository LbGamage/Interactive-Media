function setup() {
    createCanvas (windowWidth, windowHeight);
      background(255,255,255);
     noStroke();
   }
   
   
   function draw() {
     fill(0);
   rect(windowWidth/2,windowHeight/2.9, 229, 450);
   rect(windowWidth/2,windowHeight/2.9, -229, 450);
   fill(130, mouseX, mouseY);
   rect(windowWidth/2,windowHeight/2.9+350, 229, 100);
   rect(windowWidth/2,windowHeight/2.9+350, -229, 100);
   
   
     fill(130, 96, 65);
     ellipse(windowWidth/2,windowHeight/2,400, 500);
     
     fill(242, 86, 78);
     arc(windowWidth/2,windowHeight/1.5,100, 100, 0, PI);
     //arc(windowWidth / 2 - 25, windowHeight / 2 + 130, 50, 30, PI, 0);
     //arc(windowWidth / 2 +25, windowHeight / 2 + 130, 50, 30, PI, 0);
   
     
       fill(0,0,0);
     ellipse(windowWidth/2.3,windowHeight/2,40, 50);
     ellipse(windowWidth/1.8,windowHeight/2,40, 50);
     triangle(windowWidth/2,windowHeight/1.9,windowWidth/2+20,480,windowWidth/2+50,480);
     
      fill(0,0,0);
     arc(windowWidth/2,windowHeight/2.7,460, 370, PI, 0);
     
      fill(0);
   rect(windowWidth/2+150,windowHeight/2.9, 50, 380);
   rect(windowWidth/2-200,windowHeight/2.9, 50, 380);
   
   }
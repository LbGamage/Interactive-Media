// Pie Chart from the code snippets on the LMS. I edited the colours and the values


var storageData = [5,3,1,4,5];
/* you can preset colours & labels here if you like 
   (make sure you have as many colours & labels as you have data 
   (ie. 5)) and then add them to the for loop below. */
var colors = ["#d3d596","#FA9DA6", "#FBCCD4", "#Ffc98b", "#FBDFA2" ];
var storageNames = ["A", "B", "C", "D", "E"];
var total;
function setup() {
 createCanvas(windowWidth, windowHeight);
 noLoop();
 noStroke();
}
function draw() {
 let lastPiece = 0;
 // calls function to add the storageData values (to get a total)
 total = getTotal();
 for (let i = 0; i < storageData.length; i++) {
   let randColor = color(random(255), random(255), random(255));
   fill(colors[i]);
   // re-map values so they distribute evenly around the circle
   let piece = map(storageData[i], 0, total, 0, TWO_PI);
   // draw the arc which represents the data
   arc(width/2.3, height/2.3, windowHeight/1.2, windowHeight/1.2, lastPiece, lastPiece+piece);
   /* add the value of the data to the last piece 
      so that the next piece/arc starts 
      at the end of the arc before it */
   lastPiece += piece;
 }
}
// this function adds the storageData values (to get a total)
function getTotal() {
 total = 0;
 for (let i = 0; i < storageData.length; i++) {
   total += storageData[i];
 }
 return total;
}

/* you can add labels here 
 by calling this function at the end of the draw loop
 you can also customise the position of the labels 
 by changing the values in the text function
*/
function drawLabel() {
 for (let i = 0; i < storageData.length; i++) {
   fill(0);
   textSize(24);
   text(storageNames[i], 100 + i * 100, 100);
 }
}
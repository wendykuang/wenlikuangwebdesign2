var r = random(80);

function setup() { 
   createCanvas(800, 800);   
   background(220);
}
function draw() {
      textSize(20);   
   textFont("Arial");   
   textStyle(ITALIC);   
   textAlign(LEFT);   
   text("Be happy!", 100, 60);
   fill(255, 0, 0, 100); 
   // var r = random(80)
   fill(random(255),random(40),43)
   ellipse(mouseX, mouseY, random(50), random(50));      //random color circle for mouse 
    
 }
function setup() {
  createCanvas(800,400);
}




function drawCircle(x,y,radius){
  circle(x,y,radius)
}

function drawRectAngle(x,y,wide,high){
  rect(x,y,wide,high)
}
function drawLine(x1,y1,x2,y2){
  line(x1,y1,x2,y2)
}

function drawHouse(x,y){

  rect(x,y,50,50)
  triangle(50,50,75,25,100,50)
  rect(x+5,80,10,20)
  rect(x+35,75,15,15)
  rect(55,55,30,15)
}

function drawText(x,y,color,message, size){

  fill(color)
  textSize(size)
  text(message,x,y)
  
}


function draw() {
  background(220);
  drawHouse(50,50)
  drawCircle(50,175,50)
  drawRectAngle(75,150,50,50)
  drawLine(30,275,85,275)
  drawText(
}





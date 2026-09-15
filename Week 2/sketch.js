
function setup() {
  createCanvas(800, 600);
}

function draw() {


  //background 
  background(80,88,237);
  strokeWeight(5)
  stroke(16,61,16)
  fill(27,107,27)
  rect(0,475,800,)
  

  
  stroke(58,59,58)
  strokeWeight(5)
  fill(110,112,110)
  rect(0,490,800,)
  
  //road
  stroke(148,148,148)
  strokeWeight(15)

  for (let i=0; i<7; i++){
    line(65 + i * 150, 545, 130 + i * 150, 545);
  }
  noStroke(0)




    //mountains 
  fill(41,41,41)
  triangle(290, 475, 650, 475, 475, 100)

  fill(135,135,135)
  triangle(115, 475, 450, 475, 325, 200)

  fill(135,135,135)
  triangle(290, 475, 800, 475, 625, 100)
  //traffic light
  fill(48)
  rect(650,300,45,120)

  strokeWeight(8)
  stroke(48)
  line(671,400,671,500)
  
  
  noStroke()
  fill(125,7,7)
  circle(673,325,30)
  fill(140,77,7)
  circle(673,360,30)
  fill(3,69,38)
  circle(673,395,30)
  



  //trees


  for(let i=0; i<4; i++){
    fill(92,56,3)
    rect(50,50,20,45)
  }

  
  

  
  
}
  




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
  stroke(0)
  strokeWeight(1)
  fill(41,41,41)
  triangle(290, 475, 650, 475, 475, 100)


  stroke(0)
  strokeWeight(1)
  fill(135,135,135)
  triangle(115, 475, 450, 475, 325, 200)

  stroke(0)
  strokeWeight(1)
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
    rect(45 + i * 120,400,10, 85)



  for (let i =0; i<4; i++){
    let sway1 = sin(frameCount * 0.05 + i) * 10;
    let sway2 = sin(frameCount * 0.07 + i) * 10;
    let sway3 = sin(frameCount * 0.09 + i) * 10;

    fill(64,173,56)
    circle(49+i*120 + sway3,400,50)

    fill(40,112,35)
    circle(49+i*120 + sway2,400,50)

    fill(25,82,21)
    circle(49+i*120 + sway1,400,50)
  }
  //clouds

  fill(255)
  circle(40,55,50)
  circle(75,50,65)
  circle(120,55,50)

  fill(255)
  circle(55,55,50)
  circle(90,50,65)
  circle(135,55,50)
  
  
  
  
  //let auto1xpositie = 0;
  //rect(100 + auto1xpositie,100,140,50)
  //auto1xpositie = auto1xpositie + 5 

  //if(auto1xpositie>800){
  //auto1xpositie = - 300
  //}

  //letricchtingauto1=3

  




  }

  
  

  
  
}
  



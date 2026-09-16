let cloud1x = 0;
let cloud2x = 0;
let cloud3x = 0;
let maxDiameter 
let speed 



function setup() {
  createCanvas(800, 600);
  maxDiameter = 150;
  speed = 0;
}

function draw() {


  //background 
  background("darkblue");
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

  //the moon
  
  
  let diam = 100+ sin(speed) * maxDiameter
  console.log(diam)
  fill(255,255,255, 100)
  ellipse(350/2,95,diam,diam )

  fill(255,255,255, 150)
  ellipse(350,95,150) 

  fill(255,255,255,)
  ellipse(350,95,105) 

  speed += .02

  

  
  


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
  //CLOUDS!!!!!!!
   
  
  //cloud 1
  fill(224,224,223)
  circle(40+cloud1x,50,50)
  circle(75+cloud1x,45,65)
  circle(120+cloud1x,50,50)
  cloud1x = cloud1x + 0.25
  if(cloud1x > 810){
    cloud1x = -100
  }
  fill(255)
  circle(40+cloud1x,55,50)
  circle(75+cloud1x,50,65)
  circle(120+cloud1x,55,50)
  cloud1x = cloud1x + 0.25
  if(cloud1x > 810){
    cloud1x = -100
  }
 
  //cloud2 


  fill(224,224,223)
  circle(250 + cloud2x,120,50)
  circle(215 + cloud2x,120,65)
  circle(175 + cloud2x,120,50)
  cloud2x = cloud2x + 0.2
  if(cloud2x > 810){
    cloud2x = -100
  }

  fill(255)
  circle(250 + cloud2x,125,50)
  circle(215 + cloud2x,125,65)
  circle(175 + cloud2x,125,50)
  cloud2x = cloud2x + 0.2
  if(cloud2x > 810){
    cloud2x = -320;
  }
  
   //cloud 3
  fill(224,224,223)
  circle(40+cloud3x,200,50)
  circle(75+cloud3x,195,65)
  circle(120+cloud3x,200,50)
  cloud1x = cloud3x + 0.2
  if(cloud1x > 810){
    cloud1x = -100
  }
  fill(255)
  circle(40+cloud3x,210,50)
  circle(75+cloud3x,205,65)
  circle(120+cloud3x,210,50)
  cloud3x = cloud3x + 0.1
  if(cloud3x > 810){
    cloud3x = -100
  }

  
  
  
  //let auto1xpositie = 0;
  //rect(100 + auto1xpositie,100,140,50)
  //auto1xpositie = auto1xpositie + 5 

  //if(auto1xpositie>800){
  //auto1xpositie = - 300
  //}

  //letricchtingauto1=3

  

text(mouseX + ", " + mouseY, 10,20)


  }

  
  

  
  
}
  



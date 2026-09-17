let cloud1x = 0;
let cloud2x = 0;
let cloud3x = 0;
let maxDiameter1
let maxDiameter2
let speed1
let speed2
let carxpos1 = 0;
let carxpos2 = 0;
let lamp = 0;
let timer = 360; 




function setup() {
  createCanvas(800, 600);
  maxDiameter1 = 45;
  maxDiameter2 = 45;
  speed1 = 0;
  speed2 = 0;
}

function draw() {


  //background 
  background("darkblue");
  strokeWeight(5)
  stroke(16, 61, 16)
  fill(27, 107, 27)
  rect(0, 475, 800,)



  stroke(58, 59, 58)
  strokeWeight(5)
  fill(110, 112, 110)
  rect(0, 490, 800,)

  //road
  stroke(148, 148, 148)
  strokeWeight(15)

  for (let i = 0; i < 7; i++) {
    line(65 + i * 150, 545, 130 + i * 150, 545);
  }
  noStroke(0)

  //the moon


  let diam1 = 125 + sin(speed1) * maxDiameter1
  fill(255, 255, 255, 100)
  ellipse(350, 95, diam1, diam1)


  let diam2 = 125 + sin(speed2) * maxDiameter2
  fill(255, 255, 255, 150)
  ellipse(350, 95, diam2, diam2)

  fill(255, 255, 255,)
  ellipse(350, 95, 105)

  speed1 += .03
  speed2 += .02







  //mountains 
  stroke(0)
  strokeWeight(1)
  fill(41, 41, 41)
  triangle(290, 475, 650, 475, 475, 100)


  stroke(0)
  strokeWeight(1)
  fill(135, 135, 135)
  triangle(115, 475, 450, 475, 325, 200)

  stroke(0)
  strokeWeight(1)
  fill(135, 135, 135)
  triangle(290, 475, 800, 475, 625, 100)




  //traffic light
  fill(48)
  rect(650, 300, 45, 120)

  strokeWeight(8)
  stroke(48)
  line(671, 400, 671, 500)

  noStroke()
  
  
  if (lamp == 0) {
  fill(255, 0, 0); 
  carxpos1 = carxpos1 + 0
  carxpos2 = carxpos2 + 0 
} else {
  fill(125, 7, 7);
}
circle(673, 325, 30);

if (lamp == 1) {
  fill(255, 255, 0);
  carxpos1 = carxpos1 + 0.5
  carxpos2 = carxpos2 + 1
} else {
  fill(140, 77, 7);
}
circle(673, 360, 30);

if (lamp == 2) {
  fill(102, 255, 0);
  carxpos1 = carxpos1 + 1
  carxpos2 = carxpos2 + 2 
} else {
  fill(3, 69, 38);
}
circle(673, 395, 30);
  

  

  //trees


  for (let i = 0; i < 4; i++) {
    noStroke(0)
    fill(92, 56, 3)
    rect(45 + i * 120, 400, 10, 85)


    noStroke(0)
    for (let i = 0; i < 4; i++) {
      let sway1 = sin(frameCount * 0.05 + i) * 10;
      let sway2 = sin(frameCount * 0.07 + i) * 10;
      let sway3 = sin(frameCount * 0.09 + i) * 10;

      noStroke(0)
      fill(64, 173, 56)
      circle(49 + i * 120 + sway3, 400, 50)

      fill(40, 112, 35)
      circle(49 + i * 120 + sway2, 400, 50)

      fill(25, 82, 21)
      circle(49 + i * 120 + sway1, 400, 50)
    }
    //CLOUDS!!!!!!!


    //cloud 1
    noStroke(0)
    fill(224, 224, 223)
    circle(40 + cloud1x, 50, 50)
    circle(75 + cloud1x, 45, 65)
    circle(120 + cloud1x, 50, 50)
    cloud1x = cloud1x + 0.1
    if (cloud1x > 810) {
      cloud1x = -150
    }
    noStroke(0)
    fill(255)
    circle(40 + cloud1x, 55, 50)
    circle(75 + cloud1x, 50, 65)
    circle(120 + cloud1x, 55, 50)
    cloud1x = cloud1x + 0.1
    if (cloud1x > 810) {
      cloud1x = -150
    }

    //cloud2 

    noStroke(0)
    fill(224, 224, 223)
    circle(250 + cloud2x, 120, 50)
    circle(215 + cloud2x, 120, 65)
    circle(175 + cloud2x, 120, 50)
    cloud2x = cloud2x + 0.05
    if (cloud2x > 810) {
      cloud2x = -100
    }
    noStroke(0)
    fill(255)
    circle(250 + cloud2x, 125, 50)
    circle(215 + cloud2x, 125, 65)
    circle(175 + cloud2x, 125, 50)
    cloud2x = cloud2x + 0.05
    if (cloud2x > 810) {
      cloud2x = -320;
    }

    //cloud 3
    noStroke(0)
    fill(224, 224, 223)
    circle(250 + cloud3x, 200, 50)
    circle(215 + cloud3x, 195, 65)
    circle(175 + cloud3x, 200, 50)
    cloud3x = cloud3x + 0.2
    if (cloud3x > 810) {
      cloud3x = -150
    }
    noStroke(0)
    fill(255)
    circle(250 + cloud3x, 210, 50)
    circle(215 + cloud3x, 205, 65)
    circle(175 + cloud3x, 210, 50)
    cloud3x = cloud3x + 0.2
    if (cloud3x > 810) {
      cloud3x = -150
    }

    //cars 

    //car1
    noStroke(0)
    rect(43 + carxpos1, 485, 135, 25)
    rect(43 + carxpos1, 460, 100, 25)
    stroke(1)
    fill("grey")
    circle(75 + carxpos1, 525, 35)
    circle(145 + carxpos1, 525, 35)

    if (carxpos1 > 800) {
      carxpos1 = -150
    }

  }

     //car2

      noStroke(0)
    fill("red")
    rect(210 + carxpos1, 520, 170, 25)
    rect(225 + carxpos1, 500, 100, 25)
    stroke(1)
    fill("grey")
    circle(210 + carxpos1, 545, 35)
    circle(345 + carxpos1, 545, 35)

    

    if (carxpos2 > 800) {
      carxpos2 = -150
    }
     





}
function keyPressed() {
    if (keyCode === 32) {
      console.log(lamp)
      lamp++
      if(lamp>2){
        lamp = 0
      }
    }
  }




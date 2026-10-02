

// arrays for circles 
// x position and y position and colors of circles

let Xpos = [];
let Ypos = [];
let SizePos = [];
let colors = [];

// arrays for squares
// x position and y position and colors of squares
let SquareXpos = [];
let SquareYpos = [];
let SquareSizePos = [];
let SquareColors = [];


// arrays for triangles 
// x position and y position and colors of triangles
let triangleXpos = []
let triangleYpos = []
let triangleSizePos =[]
let triangleColors = []

//sound variable
//let clickSound;


//download the sound of bubbles
function preload(){
  clickSound = loadSound("/sounds/bubble.wav")
}


//start the place 
function setup() {
  createCanvas(800, 600);

  //circles
  for (let i = 0; i < 100; i++) { // make 99 circles
    Xpos.push(random(0, 800)); // add the random count of xpos 
    Ypos.push(random(0, 600)); // add the random count of ypos 
    SizePos.push(random(0, 100));// add the random size 
    colors.push(
      color(random(0, 255), random(0, 255), random(0, 255), random(0, 255)),
    ); //random color
  }
  //squares
  for (let i = 0; i < 100; i++) { //make 99 squares
    SquareXpos.push(random(0, 800)); // add the random count of xpos
    SquareYpos.push(random(0, 600)); //add the random count of ypos 
    SquareSizePos.push(random(0, 100));
    SquareColors.push(
      color(random(0, 255), random(0, 255), random(0, 255), random(0, 255)),
    );// add random color
  }
  //triangles

  for (let i = 0; i < 100; i++){ //make 99 triangles 
    triangleXpos.push(random(0, 800)) // add the random count of xpos
    triangleYpos.push(random(0, 600)) // add the random count of ypos 
    triangleSizePos.push(random(0,100)) //add the random size 
    triangleColors.push(
      color(random(0, 255), random(0, 255), random(0, 255), random(0, 255))
    ) //add the random color

  }
}


function draw() {
  background("black");


  //circles 
  for (let i = 0; i < Xpos.length; i++) {
    let pulse = sin(frameCount * 0.05); //make pulse effect with sin and frameCount (0.05 its speed of pulse )
    let size = SizePos[i] + pulse * 20;
    noStroke();
    Ypos[i] = Ypos[i] + random(2); //movement on Y
    Xpos[i] = Xpos[i] + random(2); //movement on X
    if (Ypos[i] > 650) {
      Ypos[i] = 0; //if statement fo return to 0 position 
    }
    if (Xpos[i] > 850) {
      Xpos[i] = 0; //if statement fo return to 0 position
    }
    fill(colors[i]); // color with array 
    circle(Xpos[i], Ypos[i], size); //make circles in random position
    console.log(size);
  }

  //squares 
  for (let i = 0; i < 20; i++) {
    let pulse = sin(frameCount * 0.05);//make pulse effect with sin and frameCount (0.05 its speed of pulse 
    let size = SquareSizePos[i] + pulse * 20;

    if (SquareYpos[i] > 650) {
      SquareYpos[i] = 0;
    }
    if (SquareXpos[i] > 850) {
      SquareXpos[i] = 0;
    }
    SquareXpos[i] = SquareXpos[i] + random(2);//movement of squares on X
    SquareYpos[i] = SquareYpos[i] + random(2); // movement of squares on Y
    fill(SquareColors[i]); //random colors of squares 
    noStroke();
    push();
    translate(SquareXpos[i], SquareYpos[i]); // move the position of coordinate axis 
    rotate(frameCount * 0.01);
    rectMode(CENTER);
    rect(0, 0, size, size);
    pop();
  }

  //triangles
  for (let i = 0; i < 100; i++){


     triangleYpos[i]= triangleYpos[i] + random(2,2)

     if (triangleYpos[i] > 600){
      triangleYpos[i] = -50
     }


    fill(triangleColors[i])
    triangle(triangleXpos[i],triangleYpos[i] - triangleSizePos[i], 
      triangleXpos[i] -triangleSizePos[i],triangleYpos[i]+triangleSizePos[i],
      triangleXpos[i]+triangleSizePos[i],triangleYpos[i]+triangleSizePos[i])
  
  
  
    }

  
}
function mouseClicked() {
  if (mouseButton === LEFT) {
    clickSound.play()
    for (let i = Xpos.length - 1; i >= 0; i--) {
      let distance = dist(mouseX, mouseY, Xpos[i], Ypos[i]);
      if (distance < SizePos[i] / 2) {
        clickSound.play()
        Xpos.splice(i, 1);
        Ypos.splice(i, 1);
        SizePos.splice(i, 1);
        colors.splice(i, 1);
      }
    }
  }
}

function keyPressed() {
  if (keyCode === BACKSPACE) { //restore button 
    Xpos = [];
    Ypos = [];
    SizePos = [];
    colors = [];

    SquareXpos = [];
    SquareYpos = [];
    SquareSizePos = [];
    SquareColors = [];

    triangleXpos = []
    triangleYpos = []
    triangleSizePos =[]
    triangleColors = []

    setup();
  }
}

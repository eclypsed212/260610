let Xpos = [];
let Ypos = [];
let SizePos = [];
let colors = [];

let SquareXpos = [];
let SquareYpos = [];
let SquareSizePos = [];
let SquareColors = [];

function setup() {
  createCanvas(800, 600);

  //circles
  for (let i = 0; i < 100; i++) {
    Xpos.push(random(0, 800));
    Ypos.push(random(0, 600));
    SizePos.push(random(0, 100));
    colors.push(
      color(random(0, 255), random(0, 255), random(0, 255), random(0, 255)),
    );

    for (let i = 0; i < 100; i++) {
      SquareXpos.push(random(0, 800));
      SquareYpos.push(random(0, 600));
      SquareSizePos.push(random(0, 100));
      SquareColors.push(
        color(random(0, 255), random(0, 255), random(0, 255), random(0, 255)),
      );
    }
  }
}

//squares

function draw() {
  background(220);

  for (let i = 0; i < 100; i++) {
    let pulse = sin(frameCount * 0.05);
    let size = SizePos[i] + pulse * 20;
    noStroke();
    Ypos[i] = Ypos[i] + random(2);
    Xpos[i] = Xpos[i] + random(2);
    if (Ypos[i] > 650) {
      Ypos[i] = 0;
    }
    if (Xpos[i] > 650) {
      Xpos[i] = 0;
    }
    fill(colors[i]);
    circle(Xpos[i], Ypos[i], size);
    console.log(size);
  }

  for (let i = 0; i < 20; i++) {
    let pulse = sin(frameCount * 0.05);
    let size = SquareSizePos[i] + pulse * 20;

    if (SquareYpos[i] > 650) {
      SquareYpos[i] = 0;
    }
    if (SquareXpos[i] > 650) {
      SquareXpos[i] = 0;
    }

    SquareXpos[i] = SquareXpos[i] + random(2);
    SquareYpos[i] = SquareYpos[i] + random(2);
    fill(SquareColors[i]);
    noStroke();

    push();
    translate(SquareXpos[i], SquareYpos[i]);
    rotate(frameCount * 0.01);
    rectMode(CENTER);
    rect(0, 0, size, size);
    pop();
  }
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
   Xpos = [];
   Ypos = [];
   SizePos = [];
   colors = [];

   SquareXpos = [];
   SquareYpos = [];
   SquareSizePos = [];
   SquareColors = [];

    setup();
  }
}

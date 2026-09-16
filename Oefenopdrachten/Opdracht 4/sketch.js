let number = 0;
let lamp = 0;
let x = 250;
let y = 75;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);


  //1
  fill(0)
  textSize(8)
  text(" 1.Houd B in om een blokje te laten verschijnen:", 10, 15)


  if (keyIsDown(66)) {

    fill(255)
    rect(20, 20, 60, 60)


  }

  //2
  fill(0)
  text("2.Druk op spatie om het getal op 0 te zetten.", 10, 100)


  number++;

  if (number > 500) {
    number = 0;

  }
  textSize(12)
  fill(0)
  text(number, 20, 125)
  if (keyIsDown(32)) {
    number = 0;

  }

  //3
  textSize(8)

  text("3.Druk op enter om van rood -> groen -> oranje te gaan.", 10, 150)

  fill('grey')
  rect(10, 160, 45, 100)
  rect(26, 260, 10, 75)

  if (lamp == 0) {
    fill("red")
  } else {
    fill(80)
  }
  circle(32, 180, 25)

  if (lamp == 2) {
    fill("darkorange")

  } else {
    fill(80)
  }
  circle(32, 210, 25)


  if (lamp == 1) {
    fill("green")
  } else {
    fill(80)
  }
  circle(32, 240, 25)

  //4
  fill(0)
  text("4.Moving eightball.", 200, 20)


  circle(x, y, 75)
  fill(255)
  circle(x, y, 55)

  fill("black")
  textSize(12)
  text("8", x - 3, y + 3)


  if (keyIsDown(87)) {
    y = y - 3;
  }
  if (keyIsDown(83)) {
    y = y + 3;

  }
  if (keyIsDown(65)) {
    x = x - 3;
  }
  if (keyIsDown(68)) {
    x = x + 3
  }

  if (x > 400) {
    x = 0;

  }
  if (x < 0) {
    x = 400;

  }
  if (y > 400) {
    y = 0
  }
  if (y < 0) {
    y = 400;
  }



}
function keyPressed() {
  if (keyCode === 13) {

    lamp = lamp + 1

    if (lamp > 2) {
      lamp = 0;
    }
  }






}






























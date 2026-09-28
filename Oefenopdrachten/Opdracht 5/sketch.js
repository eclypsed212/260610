



function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);


//1
fill("black")
text("1.",10,15)
for(i = 0; i<10; i ++){
  rect(20+(i*20), 20, 20 )

  if(i == 5){
    fill("blue")
  }else{
    fill("white")
  }
}

//2
fill("black")
text("2.", 15,60)
for(i=0; i <5; i++){
  let brightness = i * 100;
  rect(35, 60+(i*20), 20 )
  fill(brightness)
}

//3
fill("Black")
text("3.", 80,65)

for(i=0; i < 4; i++){
  let green = i*100

  rect(80+(i*20),80,20+(i*10),40)
  fill(0,green,0)
}
}

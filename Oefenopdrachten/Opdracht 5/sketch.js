



function setup() {
  createCanvas(800, 1200);
}

function draw() {
  background(220);


//1
fill("black")
text("1.",10,15)
for(i = 0; i<10; i ++){
  
  if(i == 5){
    fill("blue")
  }else{
    fill("white")
  }
  rect(20+(i*20), 20, 20 )
}

//2
fill("black")
text("2.", 15,60)
for(i=0; i <5; i++){
  let brightness = i * 50;
  fill(brightness)
  rect(35, 60+(i*20), 20 )
}

//3
fill("black");
text("3.", 80, 65);

let x = 80;

for (let i = 0; i < 4; i++) {
  let green = i * 85;
  let width = 30 + i * 30;

  fill(0, green, 0);
  rect(x,80,width,40);

  x = x + width
}


//4 

fill("black")
text("4.", 80,150)


for (let i=0; i < 4; i++ ){
  let blue = i * 85;
  let high = 50 + i * 30
  let width = 50 + i * 25

  fill(0,0,blue)
  rect(120 + i*50,150,width,high)
}

//5

fill("black");
text("5.", 450,50)

for(let i=0; i<4; i++){
  
  let weight = 5+i*2
  strokeWeight(weight)
  fill(255)
  circle(550+i*65,50,50,)
  

}
strokeWeight(1)


//6

fill("black")
text("6.", 450,150 )


for(let i=5; i>=0; i--){


  let radius = 50+i*50
  stroke("red")
  strokeWeight(12)
  fill("white")
  circle(600,350,radius)
}
  
strokeWeight(1)
stroke("black")

  
}



let myFont;
let rooms = ["Sleeproom","Kitchen","Playroom","Bathroom"]
let currentRoom = 0;
let stats = [

  {

    name:"Hunger",
    value: 100
  },
  {
    name:"Energy",
    value: 100
  },
  {
    name:"Happiness",
    value:100
  },
  {
    name:"Health",
    value:100
  }
];



function preload(){

}
function feed(){
  stats[0].value += 20
}
function play(){
  
}

function setup() {
  createCanvas(800, 600);
}




function draw() {
  background("gray");

  for (let i = 0; i < stats.length;i++){

    fill("gray")
    rect(20,30 + i*40,100,10,5)

    fill("green")
    rect(20,30+i*40,stats[i].value,10,10)
     
    fill("black")
    textSize(15)
    text(stats[i].name + ":" + stats[i].value,140,40+i*40)
  }
  textSize(24)
  text(rooms[currentRoom], 20,250)
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    currentRoom++;
  }
  if(keyCode === LEFT_ARROW){
    currentRoom--;
  }

  currentRoom = constain(currentRoom,0,rooms.length-1)
}
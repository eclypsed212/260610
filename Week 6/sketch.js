
let myFont;
let currentRoom = 0;
let currentFood = 0;
let fridgeOpen = false;
let selectFood = -1;
let feedButton;


let rooms = ["Bedroom","Kitchen","Playroom","Bathroom"]
//food
let food = [
  {
   name: "Apple",
   hunger: 10,
},
{
  name:"RedBull ",
  energy:50,
},
{
  name:"Monster",
  energy:100,
},
{
  name: "BigMac",
  hunger:60,
},
{
  name: "Kiwi",
  hunger: 15,
},
{
  name: "Orange",
  hunger: 20,
},
{
  name: "Coca-Cola",
  hunger:5,
},
{
  name:"Pizza",
  hunger: 35,
}
]
//stats
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
  if (rooms[currentRoom] === "Kitchen" && selectFood !== -1){
    let selected = food[selectFood]

    if(selected.hunger !== undefined){
      stats[0].value -= selected.hunger
    }
    if (selected.energy !== undefined){
      stats[1].value += selected.energy
    }
    stats[0].value = constrain(stats[0].value,0,100)
    stats[1].value = constrain(stats[1].value,0,100)

    selectFood = -1 
  }
}


function play(){
  
}

function setup() {
  createCanvas(800, 600);


  feedButton = createButton("Feed")
  feedButton.position(400,390)
  feedButton.mousePressed(feed)
  feedButton.hide()

  
}

//kitchen settings 
function drawFridge(){
  fill("lightblue")
  rect(550, 200, 120, 200, 10)

  fill("gray")
  rect(565, 215, 90, 80, 5)
  rect(565,305,90,80,5)

  fill("black")
  rect(650,230,5,45)
  rect(650,320,5,45)


  fill("black")
  textSize(14)
  text("Click",570,420)
}

function drawFoodMenu(){
  fill("white")
  rect(200,100,350,350,10)

  fill("black")
  textSize(22)
  text("Choose food:", 285,125)

  for (let i = 0; i < food.length; i ++){
    text(food[i].name, 220, 175 + i * 30)
  }

  if (selectFood !== -1){
    fill("blue")
    textSize(16)
    text("Selected: " + food[selectFood].name,220,430)
  }

 
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

  if(rooms[currentRoom] === "Kitchen"){
    drawFridge()
  }
  if (fridgeOpen === true){
    drawFoodMenu()
  }
  if(fridgeOpen && selectFood !== -1){
    feedButton.show()
  }else{
    feedButton.hide()
  }

  if (fridgeOpen && selectFood !== -1){
    feedButton.show()

  }else{
    feedButton.hide()
  }

  

}




function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    currentRoom++;
  }
  if(keyCode === LEFT_ARROW){
    currentRoom--;
  }

  currentRoom = constrain(currentRoom,0,rooms.length-1)
}
function mousePressed(){
  if(rooms[currentRoom] === "Kitchen"){
    if(fridgeOpen === false){
    if (mouseX > 550 && mouseX < 670 && mouseY > 200 && mouseY < 400){
      fridgeOpen = true;
    }
  }else{
   if( mouseX > 200 && mouseX < 550 && mouseY > 155 && mouseY < 415){
    let index = floor ((mouseY - 160)/30)
    if (index >=  0 && index < food.length){
      selectFood = index;
    }
   }
  } 
}else{
    fridgeOpen = false 

  }
}

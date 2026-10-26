let myFont;
let currentRoom = 0;
let currentFood = 0;
let fridgeOpen = false;
let selectFood = -1;
let feedButton;
let lastUpdate = 0;
let sleepButton;
let GetUpButton;
let isSleeping = false;
let cleanButton;
let pet;
let petSad;
let petHungry;
let PetOverFed;
let isOVerFed = false;
let wardrobeButton;


let petSleepy;
let petTired;

let rooms = ["Bedroom", "Kitchen", "Playroom", "Bathroom"];


let clothingMenu = false;
let clothes = [
  loadImage("assets/cloth/ak_longsleeve.png"),
  loadImage("assets/cloth/dynasty_zip-hoodie.png"),
  loadImage("assets/cloth/sonic_jersey_blue.png"),
]
let selectClothes = 0;

//food
let food = [
  {
    name: "Apple",
    hunger: 10,
  },
  {
    name: "RedBull ",
    energy: 50,
  },
  {
    name: "Monster",
    energy: 100,
  },
  {
    name: "BigMac",
    hunger: 60,
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
    hunger: 5,
  },
  {
    name: "Pizza",
    hunger: 35,
  },
];
//stats
let stats = [
  {
    name: "Hunger",
    value: 100,
  },
  {
    name: "Energy",
    value: 100,
  },
  {
    name: "Happiness",
    value: 100,
  },
  {
    name: "Health",
    value: 100,
  },
];



function preload() {
  pet = loadImage("assets/zzxc.png")
  petSad = loadImage("assets/zxc_sad.png")
  petHungry = loadImage("assets/zxc_hungry.png")
  petTired = loadImage("assets/zxc_tired.png")
  PetOverFed = loadImage("assets/zxc_overfed.png")
}


function updateStats() {
  if (isSleeping) {
    stats[0].value += 1
    stats[1].value += 5
    stats[3].value += 1
  } else {
    stats[0].value += 1
    stats[2].value -= 1
  }
  stats[0].value = constrain(stats[0].value, 0, 100)
  stats[1].value = constrain(stats[1].value, 0, 100)
  stats[2].value = constrain(stats[2].value, 0, 100)
  stats[3].value = constrain(stats[3].value, 0, 100)

  if (stats[0].value >= 40) {
    isOVerFed = false
  }


}
function feed() {
  if (rooms[currentRoom] === "Kitchen" && selectFood !== -1) {
    let selected = food[selectFood];

    if (selected.hunger !== undefined && stats[0].value <= 20) {
      isOVerFed = true
      stats[3].value -= 10
    }

    if (selected.hunger !== undefined) {
      stats[0].value -= selected.hunger;
    }
    if (selected.energy !== undefined) {
      stats[1].value += selected.energy;
    }
    stats[0].value = constrain(stats[0].value, 0, 100);
    stats[1].value = constrain(stats[1].value, 0, 100);
    stats[3].value = constrain(stats[3].value, 0, 100)

    selectFood = -1;
  }
}

function play() { }

function setup() {
  createCanvas(800, 600);
  //create feedButton 
  feedButton = createButton("Feed");
  feedButton.position(400, 390);
  feedButton.mousePressed(feed);
  feedButton.hide();

  //create Sleep Button

  sleepButton = createButton("Sleep")
  sleepButton.position(400, 430)
  sleepButton.mousePressed(sleep)
  sleepButton.hide()

  //create get up button

  GetUpButton = createButton("Get up")
  GetUpButton.position(400, 430)
  GetUpButton.mousePressed(getUp)
  GetUpButton.hide()

  //create clean button 
  cleanButton = createButton("Clean")
  cleanButton.position(400, 430)
  cleanButton.mousePressed(clean)
  cleanButton.hide()

  //create wardrobe button 
  wardrobeButton = createButton("Clothing")
  wardrobeButton.position(500,250)
  wardrobeButton.mousePressed(clothing)
  wardrobeButton.hide()

  
}

function clothing(){

  if(rooms[currentRoom] === "Bedroom"){
    clothingMenu = !clothingMenu
  }
}

function sleep() {
  if (rooms[currentRoom] === "Bedroom" && !isSleeping) {
    isSleeping = true
  }
}
function getUp() {
  isSleeping = false

}
function clean() {
  if (rooms[currentRoom] === "Bathroom") {
    stats[3].value += 20
    stats[3].value = constrain(stats[3].value, 0, 100)
  }


}


//kitchen settings
function drawFridge() {
  fill("lightblue");
  rect(550, 200, 120, 200, 10);

  fill("gray");
  rect(565, 215, 90, 80, 5);
  rect(565, 305, 90, 80, 5);

  fill("black");
  rect(650, 230, 5, 45);
  rect(650, 320, 5, 45);

  fill("black");
  textSize(14);
  text("Click", 570, 420);
}

function drawFoodMenu() {
  fill("white");
  rect(200, 100, 350, 350, 10);

  fill("black");
  textSize(22);
  text("Choose food:", 285, 125);

  for (let i = 0; i < food.length; i++) {
    text(food[i].name, 220, 175 + i * 30);
  }

  if (selectFood !== -1) {
    fill("blue");
    textSize(16);
    text("Selected: " + food[selectFood].name, 220, 430);
  }
}

function draw() {
  background("gray");

  if (millis() - lastUpdate >= 5000) {
    updateStats();
    lastUpdate = millis();

  }

  for (let i = 0; i < stats.length; i++) {
    fill("gray");
    rect(20, 30 + i * 40, 100, 10, 5);

    fill("green");
    rect(20, 30 + i * 40, stats[i].value, 10, 10);

    fill("black");
    textSize(15);
    text(stats[i].name + ":" + stats[i].value, 140, 40 + i * 40);
  }
  textSize(24);
  text(rooms[currentRoom], 20, 250);



  if (isOVerFed) {
    image(PetOverFed, 300, 200, 150, 150);
  } else if (stats[2].value <= 35) {
    image(petSad, 300, 200, 150, 150);
  } else if (stats[0].value >= 65) {
    image(petHungry, 300, 200, 150, 150);
  } else if (stats[1].value <= 30) {
    image(petTired, 300, 200, 150, 150);
  } else {
    image(pet, 300, 200, 150, 150);
  }

  if (rooms[currentRoom] === "Kitchen") {
    drawFridge();
  }
  if (fridgeOpen === true) {
    drawFoodMenu();
  }
  if (fridgeOpen && selectFood !== -1) {
    feedButton.show();
  } else {
    feedButton.hide();
  }

  if (rooms[currentRoom] === "Bedroom" && !isSleeping) {
    sleepButton.show()

  } else {
    sleepButton.hide()
  }

  if (rooms[currentRoom] === "Bedroom" && isSleeping) {
    GetUpButton.show()
  } else {
    GetUpButton.hide()
  }

  if (rooms[currentRoom] === "Bathroom") {
    cleanButton.show()
  } else {
    cleanButton.hide()
  }

  if (rooms[currentRoom] === "Bedroom"){
    wardrobeButton.show()
  }else{
    wardrobeButton.hide()
  }

}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    currentRoom++;
  }
  if (keyCode === LEFT_ARROW) {
    currentRoom--;
  }

  currentRoom = constrain(currentRoom, 0, rooms.length - 1);
}
function mousePressed() {
  if (rooms[currentRoom] !== "Kitchen") {
    return;
  }
  if (fridgeOpen === false) {
    if (mouseX > 550 && mouseX < 670 && mouseY > 200 && mouseY < 400) {
      fridgeOpen = true;
    }
  } else {
    if (mouseX > 550 && mouseX < 670 && mouseY > 200 && mouseY < 400) {
      fridgeOpen = false
      selectFood = -1
    }
    else if (mouseX > 200 && mouseX < 550 && mouseY >= 160 && mouseY < 400) {
      let index = floor((mouseY - 160) / 30)

      if (index >= 0 && index < food.length) {
        selectFood = index
      }
    }
  }


}

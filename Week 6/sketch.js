let myFont;
let currentRoom = 0;
let currentFood = 0;
let fridgeOpen = false;
let selectFood = -1;
let feedButton;
let lastUpdate = 0;
let sleepButton;
let isSleeping = false;
let pet;
let petSad;
let petHungry;
let PetOverFed;
let isOVerFed = false;
let wardrobeButton;
let bed
let sleepingBed
let wardrobe
let bedroom
let carpet


let playroom
let jbl
let music
let musicPlaying = false
let pc
let monitor
let keyboard
let chair
let minigameOpen

let isBathing = false
let bathStartTime = 0
let bathroom
let bath
let bathingImage

let kitchenClosed
let kitchenOpen
let foodMenuOpen = false



let petSleepy;
let petTired;

let rooms = ["Bedroom", "Kitchen", "Playroom", "Bathroom"];


let clothingMenu = false;
let clothes = []
let skins = []

let selectClothes = -1;

let foodImages = []

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

  {
    name: "Pepper",
    hunger: 10,
  }
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
  bed = loadImage("assets/rooms/badroom/bed.png")
  wardrobe = loadImage("assets/rooms/badroom/wardrobe.png")
  bedroom = loadImage("assets/rooms/badroom/bedroom.jpg")
  sleepingBed = loadImage("assets/rooms/badroom/sleeping_bed.png")
  bathroom = loadImage("assets/rooms/bathroom/bathroom.png")
  bath = loadImage("assets/rooms/bathroom/bath.png")
  bathingImage = loadImage("assets/rooms/bathroom/isBathing.png")
  kitchenClosed = loadImage("assets/rooms/kitchen/kitchen_close.png")
  kitchenOpen = loadImage("assets/rooms/kitchen/kitchen_open.png")
  playroom = loadImage("assets/rooms/Playroom/playroom.png")
  jbl = loadImage("assets/rooms/Playroom/jbl.png")
  carpet = loadImage("assets/rooms/badroom/carpet.png")
  pc = loadImage("assets/rooms/Playroom/pc.png")
  monitor = loadImage("assets/rooms/Playroom/monitor.png")
  keyboard = loadImage("assets/rooms/Playroom/keyboard.png")
  chair = loadImage("assets/rooms/Playroom/chair.png")



  music = loadSound("assets/rooms/Playroom/music/interworld -metamorphosis.mp3")






  clothes = [
    loadImage("assets/cloth/sonic_jersey_blue.png"),
    loadImage("assets/cloth/ak_longsleeve.png"),
    loadImage("assets/cloth/dynasty_zip-hoodie.png"),
  ]

  skins = [
    {
      normal: loadImage("assets/skins/jersey/normal.png"),
      sad: loadImage("assets/skins/jersey/sad.png"),
      hungry: loadImage("assets/skins/jersey/hungry.png"),
      overfed: loadImage("assets/skins/jersey/overfeed.png"),
      tired: loadImage("assets/skins/jersey/tired.png")
    },

    {
      normal: loadImage("assets/skins/ak/normal.png"),
      sad: loadImage("assets/skins/ak/sad.png"),
      hungry: loadImage("assets/skins/ak/hungry.png"),
      overfed: loadImage("assets/skins/ak/overfeed.png"),
      tired: loadImage("assets/skins/ak/tired.png")


    },
    {
      normal: loadImage("assets/skins/zip_hoodie/normal.png"),
      sad: loadImage("assets/skins/zip_hoodie/sad.png"),
      hungry: loadImage("assets/skins/zip_hoodie/hungry.png"),
      overfed: loadImage("assets/skins/zip_hoodie/overfeed.png"),
      tired: loadImage("assets/skins/zip_hoodie/tired.png")


    }

  ]

  foodImages = [
    loadImage("assets/food/apple.png"),
    loadImage("assets/food/redbull.jpg"),
    loadImage("assets/food/monster.png"),
    loadImage("assets/food/bigmac.png"),
    loadImage("assets/food/kiwi.png"),
    loadImage("assets/food/orange.png"),
    loadImage("assets/food/cola.jpg"),
    loadImage("assets/food/pizza.png"),
    loadImage("assets/food/peper.png"),
  ]




}


function updateStats() {
  if (isSleeping) {
    stats[0].value += 1
    stats[1].value += 5
    stats[3].value += 1
  } else {
    stats[0].value += 1
    stats[1].value -= 1
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

function drawBathroom() {
  image(bathroom, 0, 0, 800, 600)

  if (isBathing) {
    image(bathingImage, 180, 250, 340, 220)
  } else {
    image(bath, 180, 270, 340, 220)
  }
}

function startBath() {
  if (!isBathing) {
    isBathing = true
    bathStartTime = millis()
  }
}

function drawBedroom() {

  image(bedroom, 0, 0, 800, 600)
  image(carpet, 200, 476, 480, 120)


  if (isSleeping) {
    image(sleepingBed, 30, 330, 320, 220)
  } else {
    image(bed, 30, 330, 320, 220)
  }
  image(wardrobe, 500, 210, 300, 340)

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
      stats[1].value = constrain(stats[1].value + 5, 0, 100)
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
  feedButton.position(355, 495);
  feedButton.size(90, 40)
  feedButton.style("background-color", "#34302a")
  feedButton.style("color", "#f4d39b")
  feedButton.style("border", "2px solid #d4a65c")
  feedButton.style("border-radius", "12px")
  feedButton.style("font-size", "16px")
  feedButton.style("font-weight", "bold")
  feedButton.style("letter-spacing", "2px")
  feedButton.style("cursor", "pointer")
  feedButton.style("transition", "all 0.2s ease")

  feedButton.mousePressed(feed);
  feedButton.hide();

  feedButton.mouseOver(() => {
    feedButton.style("background-color", "#d4a65c")
    feedButton.style("color", "#202024")
    feedButton.style("transform", "scale(1.08)")
    feedButton.style("box-shadow", "0 0 15px #d4a65c66")
  });

  feedButton.mouseOut(() => {
    feedButton.style("background-color", "#34302a");
    feedButton.style("color", "#f4d49b");
    feedButton.style("transform", "scale(1)");
    feedButton.style("box-shadow", "none")

  })

}

function drawPlayroom() {
  image(playroom, 0, 0, 800, 600)
  image(jbl, 200, 170, 90, 50)
  image(pc, 500, 250, 120, 150)
  image(keyboard, 450, 420, 150, 50)
  image(chair, 520, 400, 210, 190)
  image(monitor, 375, 180, 200, 150)
}
function drawMinigame() {
  background(25, 25, 35)
  fill(255)
  textAlign(CENTER)
  textSize(35)
  text("CAR GAME", 400, 150)

  textSize(20)
  text("Coming soon...", 400, 300)
  textSize(16)
  text("Press ESC to exit", 400, 500)
  textAlign(LEFT)

}

function drawClothingMenu() {
  fill("white")
  rect(200, 100, 350, 350, 10)
  fill("black")
  textSize(22)
  text("Choose clothes:", 220, 135)
  for (let i = 0; i < clothes.length; i++) {
    image(clothes[i], 230 + i * 100, 200, 80, 100)

  }
  textSize(16)

  text("Click an outfit to select", 220, 400)

  fill("lightgray")
  rect(220, 340, 120, 40, 8)

  fill("black")
  textSize(18)
  text("Default", 245, 366)
}

function clothing() {

  if (rooms[currentRoom] === "Bedroom") {
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
function drawKitchen() {
  if (fridgeOpen) {
    image(kitchenOpen, 0, 0, 800, 600)
  } else {
    image(kitchenClosed, 0, 0, 800, 600)

  }

}

function drawFoodMenu() {
  fill(25, 25, 30, 245)
  stroke(190, 145, 85)
  strokeWeight(3)
  rect(185, 65, 430, 480, 18)
  noStroke()
  fill(255)
  textSize(25)
  textAlign(CENTER)
  text("Choose food", 400, 100)
  fill(80, 45, 45)
  rect(565, 75, 35, 35, 8)
  fill(255)
  textSize(22)
  text("X", 582, 100)

  for (let i = 0; i < foodImages.length; i++) {
    let col = i % 3
    let row = floor(i / 3)

    let x = 210 + col * 135
    let y = 125 + row * 105

    if (selectFood === i) {
      fill(115, 85, 40)
      stroke(255, 205, 110)
      strokeWeight(3)
    } else {
      fill(45, 45, 50)
      stroke(90)
      strokeWeight(1)
    }

    rect(x, y, 110, 95, 12)
    noStroke()
    image(foodImages[i], x + 15, y + 5, 80, 80)
  }
  fill(255)
  textSize(17)

  if (selectFood !== -1) {
    text("Selected: " + food[selectFood].name, 400, 475)
  } else {
    text("Select a product", 400, 475)
  }

  textAlign(LEFT)
  noStroke()
}


function getPetImage() {
  let emotion = "normal"

  if (isOVerFed) {
    emotion = "overfed"
  } else if (stats[2].value <= 35) {
    emotion = "sad"
  } else if (stats[0].value >= 65) {
    emotion = "hungry"
  } else if (stats[1].value <= 30) {
    emotion = "tired"
  };



  let defaultImages = {
    normal: pet,
    sad: petSad,
    hungry: petHungry,
    tired: petTired,
    overfed: PetOverFed
  }

  if (selectClothes === -1) {
    return defaultImages[emotion]
  }

  return skins[selectClothes][emotion] || defaultImages[emotion]
}

function draw() {
  background("gray");
  if (rooms[currentRoom] === "Bedroom") {
    drawBedroom();
  }

  if (rooms[currentRoom] === "Kitchen") {
    drawKitchen();
  }

  if (millis() - lastUpdate >= 5000) {
    updateStats();
    lastUpdate = millis();

  }

  if (isBathing && millis() - bathStartTime >= 5000) {
    isBathing = false;
    stats[3].value = constrain(stats[3].value + 20, 0, 100)
  }

  if (rooms[currentRoom] === "Bathroom") {
    drawBathroom()
  }

  if (rooms[currentRoom] === "Playroom") {
    drawPlayroom()
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

  if (!isSleeping && !isBathing) {
    image(getPetImage(), 300, 200, 150, 150)
  }

  if (rooms[currentRoom] === "Kitchen" && foodMenuOpen) {
    drawFoodMenu()
  }








  //if (fridgeOpen === true) {
  //drawFoodMenu();
  //}



  if (rooms[currentRoom] === "Kitchen" && foodMenuOpen && selectFood !== -1) {
    feedButton.show()
  } else {
    feedButton.hide()
  }



  if (rooms[currentRoom] === "Bedroom" && clothingMenu) {
    drawClothingMenu()
  }

  if (minigameOpen){
    drawMinigame()
    return
  }



}

function keyPressed() {
  if (isSleeping || isBathing) {
    return
  }
  if (keyCode === RIGHT_ARROW) {
    currentRoom++;
  }
  if (keyCode === LEFT_ARROW) {
    currentRoom--;
  }

  currentRoom = constrain(currentRoom, 0, rooms.length - 1);

  if (rooms[currentRoom] !== "Kitchen") {
    fridgeOpen = false
    foodMenuOpen = false
    selectFood = -1
  }

  if (rooms[currentRoom] !== "Playroom" && musicPlaying) {
    music.pause()
    musicPlaying = false
  }
}

function mousePressed() {
  if (rooms[currentRoom] === "Bathroom") {
    if (mouseX > 180 && mouseX < 520 && mouseY > 270 && mouseY < 490) {
      startBath();
    }
    return
  }

  if (clothingMenu && rooms[currentRoom] === "Bedroom") {

    if (mouseX > 220 && mouseX < 340 && mouseY > 340 && mouseY < 380) {
      selectClothes = -1
      clothingMenu = false
      return
    }
    for (let i = 0; i < clothes.length; i++) {
      let x = 230 + i * 100

      if (mouseX > x && mouseX < x + 80 && mouseY > 200 && mouseY < 300) {
        selectClothes = i;
        clothingMenu = false
        return
      }
    }
    return
  }

  if (rooms[currentRoom] === "Bedroom") {
    if (mouseX > 30 && mouseX < 350 && mouseY > 330 && mouseY < 550) {
      if (isSleeping === false) {
        sleep()
      } else {
        getUp()
      }
    }
  }

  if (rooms[currentRoom] === "Bedroom") {
    if (mouseX > 580 && mouseX < 770 && mouseY > 210 && mouseY < 550) {
      clothing()
    }
  }
  if (rooms[currentRoom] === "Kitchen") {

    // Если меню с продуктами открыто
    if (foodMenuOpen) {

      // Нажатие на X закрывает меню
      if (mouseX > 565 && mouseX < 600 &&
        mouseY > 75 && mouseY < 110) {
        foodMenuOpen = false;
        selectFood = -1;
        return;
      }


      for (let i = 0; i < foodImages.length; i++) {
        let col = i % 3;
        let row = floor(i / 3);

        let x = 210 + col * 135;
        let y = 125 + row * 105;

        if (mouseX > x && mouseX < x + 110 &&
          mouseY > y && mouseY < y + 95) {
          selectFood = i;
          return;
        }
      }

      return;
    }


    if (mouseX > 10 && mouseX < 270 &&
      mouseY > 90 && mouseY < 460) {

      if (!fridgeOpen) {
        fridgeOpen = true;
      } else {
        foodMenuOpen = true;
      }
    }

    return;
  }
//pproblem hier window of minigame is not working 
  if (rooms[currentRoom] === "Playroom" && !minigameOpen){
    if(mouseX > 375 && mouseX < 575 && mouseY > 180 && mouseY < 330){
      minigameOpen = true
      return
    }
  }


  if (rooms[currentRoom] === "Playroom") {
    if (mouseX > 200 && mouseX < 290 && mouseY > 170 && mouseY < 220) {
      if (musicPlaying) {
        music.pause()
        musicPlaying = false
      } else {
        music.loop()
        musicPlaying = true
      }
      return
    }
  }

}




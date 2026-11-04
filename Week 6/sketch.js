let currentRoom = 0;
let currentFood = 0;
let fridgeOpen = false;
let selectFood = -1;
let feedButton;
let lastUpdate = 0;
let sleepButton;
let isSleeping = false;

// variables of cat stats
let pet;
let petSad;
let petHungry;
let PetOverFed;
let isOVerFed = false;
let petSleepy;
let petTired;

// sleeeping room
let wardrobeButton;
let bed
let sleepingBed
let wardrobe
let bedroom
let carpet

// playroom 
let playroom
let jbl
let music
let musicPlaying = false
let pc
let monitor
let keyboard
let chair

//minigame 
let minigameOpen
let mainCar
let police
let car1
let car2
let car3
let car4
let mainCarSpeed = 5
let mainCarX = 370
let mainCarY = 425
let roadOffset = 0
let enemyCars = []
let lastEnemySpawn = 0
let enemySpawnInterval = 1500
let enemySpeed = 4
let gameScore = 0
let gameOver = false


//bathroom 
let isBathing = false
let bathStartTime = 0
let bathroom
let bath
let bathingImage


//kitchen 
let kitchenClosed
let kitchenOpen
let foodMenuOpen = false


//array with rooms
let rooms = ["Bedroom", "Kitchen", "Playroom", "Bathroom"];

// variables of wardrobe
let clothingMenu = false;
let clothes = []
let skins = []
let selectClothes = -1;


//food
let foodImages = []
let food = [          //array with food and information of food
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
let stats = [   // array with stats and information
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


function preload() {   //function of loading images for project 
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
  mainCar = loadImage("assets/rooms/Playroom/minigame/zxc_car.png")
  police = loadImage("assets/rooms/Playroom/minigame/police.png")
  car1 = loadImage("assets/rooms/Playroom/minigame/car1.png")
  car2 = loadImage("assets/rooms/Playroom/minigame/car2.png")
  car3 = loadImage("assets/rooms/Playroom/minigame/car3.png")
  car4 = loadImage("assets/rooms/Playroom/minigame/car4.png")

  music = loadSound("assets/rooms/Playroom/music/interworld -metamorphosis.mp3") //music

  //array of clothes 
  clothes = [
    loadImage("assets/cloth/sonic_jersey_blue.png"),
    loadImage("assets/cloth/ak_longsleeve.png"),
    loadImage("assets/cloth/dynasty_zip-hoodie.png"),
  ]


  // array of skins ( clothes for pet)
  // for every skin we must make image with own stat 
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

  // array food images 

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

function saveGame(){
  let saveData = {
    stats: stats.map(stat => stat.value), //save all pet stats as an array of values 
    selectClothes: selectClothes, //save the selected clothes 
    currentRoom: currentRoom //save the current room 
  }
  localStorage.setItem("tamagotchiSave", JSON.stringify(saveData)) //convert the data and save it in the browser 
}


function loadGame() {
  let saved = localStorage.getItem("tamagotchiSave"); // get the saved game data from the browser 

  if (saved) {
    try { // try to load the saved data 
      let saveData = JSON.parse(saved);//conver back into a js object 
      
      // check if the saved stats are an array
      // and have the correct number of values
      if (Array.isArray(saveData.stats) && 
          saveData.stats.length === stats.length) {
        for (let i = 0; i < stats.length; i++) {
          if (typeof saveData.stats[i] === "number") {
            // restore the stat and keep it between 0 and 100
            stats[i].value = constrain(saveData.stats[i], 0, 100);
          }
        }
      }
       //check if the saved clothes number is valid
      if (Number.isInteger(saveData.selectClothes) &&
          saveData.selectClothes >= -1 &&
          saveData.selectClothes < clothes.length) {
        selectClothes = saveData.selectClothes; // restore the selected clothes
      }
        //check if the saved room number is valid
      if (Number.isInteger(saveData.currentRoom) &&
          saveData.currentRoom >= 0 &&
          saveData.currentRoom < rooms.length) {
        currentRoom = saveData.currentRoom; // restore the current room
      }

    } catch (error) {  // if something goes wrong while loading
      console.log("Could not load saved game"); // show error in console 
    }
  }
}

// function of update every stats for pet
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

  //function for drawing bathroom 

  function drawBathroom() {
    image(bathroom, 0, 0, 800, 600)

    if (isBathing) {
      image(bathingImage, 180, 250, 340, 220)
    } else {
      image(bath, 180, 270, 340, 220)
    }
  }

  //function of bathing with duration time

  function startBath() {
    if (!isBathing) {
      isBathing = true
      bathStartTime = millis()
    }
  }

  //function of drawing Bedroom 
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

  //function of feed 
  function feed() {
    if (rooms[currentRoom] === "Kitchen" && selectFood !== -1) {  // if statement for when you choose food
      let selected = food[selectFood];

      if (selected.hunger !== undefined && stats[0].value <= 20) { //if pet is overfeeding stat of health deacreases 
        isOVerFed = true
        stats[3].value -= 10
      }
      //check if the selected food has a hunger value 
      if (selected.hunger !== undefined) {
        stats[0].value -= selected.hunger;
        stats[1].value = constrain(stats[1].value + 5, 0, 100)
      }
      //check if the selected product has an energy value
      if (selected.energy !== undefined) {
        stats[1].value += selected.energy;
      }
      stats[0].value = constrain(stats[0].value, 0, 100);
      stats[1].value = constrain(stats[1].value, 0, 100);
      stats[3].value = constrain(stats[3].value, 0, 100)
      
      //reset the selected food after feeding
      selectFood = -1;
    }
  }

  function setup() {
    createCanvas(800, 600);

    loadGame()
    music.setVolume(0.2)
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
    
    // zoom effect fo feed button 
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
  
  //function of drawing Playroom
  function drawPlayroom() {
    image(playroom, 0, 0, 800, 600)
    image(jbl, 200, 170, 90, 50)
    image(pc, 530, 180, 120, 150)
    image(monitor, 375, 180, 200, 150)
    image(keyboard, 410, 290, 150, 50)
    image(chair, 260, 240, 310, 300)

  }

  function rewardMinigame() {



    //if the player has 0 points, give no reward
    if (gameScore === 0) {
      return
    }


    // create variables for happiness reward and energy cost
    let happinessReward = 0
    let energyCost = 0


    // if the player has 10 or more points
    if (gameScore >= 10) {
      //add 20 happiness and remove 10 energy
      happinessReward = 20
      energyCost = 10
      //if the player has 5 to 9 points 
    } else if (gameScore >= 5) {
      //add 10 happiness and remove 10 energy 
      happinessReward = 10
      energyCost = 10

    // if the player has 1 to 4 points 
    } else {
      //add 5 hapiness and remove 5 energy 
      happinessReward = 5
      energyCost = 5

    }
    stats[2].value = constrain(stats[2].value + happinessReward, 0, 100)

    stats[1].value = constrain(stats[1].value - energyCost, 0, 100)
  }

  //function for drwaing minigame 
  function drawMinigame() {
    if (gameOver) {
      background(20, 20, 25)
      fill(255, 80, 80)

      textAlign(CENTER)
      textSize(45)
      text("Game over", 400, 220)

      fill(255)
      textSize(25)
      text("Score: " + gameScore, 400, 290)

      textSize(18)
      text("Press R to restart", 400, 360)
      text("Press ESC to exit", 400, 400)
      textSize(16)
      if (gameScore >= 10) {
        text("Happiness +20 | Energy -10", 400, 450)
      } else if (gameScore >= 5) {
        text("Happiness +10 | Energy -10", 400, 450)
      } else if(gameScore > 0) {
        text("Happiness +5 | Energy -5", 400, 450)
      }else {
        text("No reward", 400, 450 )
      }
      textAlign(LEFT)
      return
    }
    background(40, 120, 60)

    //road
    noStroke()
    fill(45, 45, 50)
    rect(200, 0, 400, 600)

    //white lines 
    fill(255)
    rect(210, 0, 8, 600)
    rect(582, 0, 8, 600)

    //moving road 
    fill(255)

    for (let y = -100 + roadOffset; y < 600; y += 100) {

      //draw each white line
      rect(396, y, 8, 50)
    }
    //move the road lines down by 5 pixels 
    roadOffset += 5


    // check if the lines have moved 100 pixels 
    if (roadOffset >= 100) {

      //reset the position to repeat the animation 
      roadOffset = 0
    }




    //support 

    fill(255)
    textAlign(CENTER)
    textSize(16)

    text("Avoid the cars!", 100, 30)
    text("Score: " + gameScore, 100, 60)
    text("LEFT / RIGHT", 100, 90)
    text("ESC to exit")
    textAlign(LEFT)

    if (keyIsDown(LEFT_ARROW)) {
      mainCarX -= mainCarSpeed
    }
    if (keyIsDown(RIGHT_ARROW)) {
      mainCarX += mainCarSpeed
    }


    // Check if it is time to create a new enemy car
    if (millis() - lastEnemySpawn >= enemySpawnInterval) {

      // Create a new enemy car
      spawnEnemyCar()
      // Save the current time
      lastEnemySpawn = millis()
    }
    
    // Keep the player's car inside the road
    mainCarX = constrain(mainCarX, 260, 540)
    // Move enemy cars and check for collisions
    updateEnemyCars()
    if(gameOver){
      return 
    }


    //image of main car 

    image(mainCar, mainCarX - 50, mainCarY - 90, 100, 180)




  }

  function spawnEnemyCar() {

    //create an array with enemy car images 
    let enemyImages = [police, car1, car2, car3, car4]
    //choose a random car image 
    let randomImage = random(enemyImages)
    //create an array wtih road lane positions 
    let lanes = [290, 400, 510]
    //choose  a random lane for the enemy car
    let randomX = random(lanes)
    //add a new enemy car to the array
    enemyCars.push({
      //set the cars horizontal position 
      x: randomX,
      //start the car above the screen
      y: - 140,
      //use the randomly selected car image 
      img: randomImage
    })
  }

  function updateEnemyCars() {

    //go through all enemy cars, starting from the last one 
    for (let i = enemyCars.length - 1; i >= 0; i--) {
      // get the current enemy car from array 
      let enemy = enemyCars[i]
      //move the enemy car down
      enemy.y += enemySpeed
      //draw the enemy car on the screen 
      image(enemy.img, enemy.x - 40, enemy.y, 80, 140)

      //check if the cars are close to each other horizontallly 

      let collisionX = abs(mainCarX - enemy.x) < 75

      // check if the cars overlap vertically 
   
      let collisionY = mainCarY - 65 < enemy.y + 125 && mainCarY + 65 > enemy.y + 15
      
      //check if the cars collide on bothe axes 
      if (collisionX && collisionY) {
        gameOver = true
        return
      }

      //check if the enemy car has left the screen 
      if (enemy.y > 600) {
        enemyCars.splice(i, 1)
        gameScore += 1
      }
    }
  }
  // draw clothing menu 
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
  // function of checking the opening of clothing menu in bedroom
  function clothing() {

    if (rooms[currentRoom] === "Bedroom") {
      clothingMenu = !clothingMenu
    }
  }
  // function of checking the sleep status in bedroom 
  function sleep() {
    if (rooms[currentRoom] === "Bedroom" && !isSleeping) {
      isSleeping = true
    }
  }
  //function of get up
  function getUp() {
    isSleeping = false

  }
  //function of cleaning 
  function clean() {
    if (rooms[currentRoom] === "Bathroom") {
      stats[3].value += 20
      stats[3].value = constrain(stats[3].value, 0, 100)
    }
  }


  //draw kitchen 
  function drawKitchen() {
    if (fridgeOpen) {
      image(kitchenOpen, 0, 0, 800, 600) //image of kitchen with open fridge 
    } else {
      image(kitchenClosed, 0, 0, 800, 600)//image of kitchen with closed fridge 

    }

  }

  //function of drawing food menu
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


    //for loop for making the fridge pretier with good position of products
    for (let i = 0; i < foodImages.length; i++) {
      let col = i % 3 //calculate the column (3 products per row )
      let row = floor(i / 3) //calculate the row number 

      let x = 210 + col * 135 //calculate the horizontal position of the product 
      let y = 125 + row * 105 //calculate the vertical position of the product

      if (selectFood === i) { //check if this product is selected 
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
    //check if a food product is selected 
    if (selectFood !== -1) {
      //show the name of the selected product 
      text("Selected: " + food[selectFood].name, 400, 475)
    } else {
      text("Select a product", 400, 475) //ask the player to select a product 
    }

    textAlign(LEFT)
    noStroke()
  }

  //function for current emotion of stats 
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


     //store the default pet images for different emotions
     let defaultImages = {
      normal: pet,
      sad: petSad,
      hungry: petHungry,
      tired: petTired,
      overfed: PetOverFed
    }


    //check if the pet is not wearing any clothes 
    if (selectClothes === -1) {
      //return the default image for the current emotion 
      return defaultImages[emotion]
    }
    //return the pet image with selected clothes and emotion 
    //if that image does not exist, use the default image 
    return skins[selectClothes][emotion] || defaultImages[emotion]
  }

  function draw() {

    if (millis() - lastUpdate >= 5000) { //check if 5 seconds have passed since the last update 
      updateStats(); //update the pets stats 
      saveGame() //save the game 
      lastUpdate = millis(); //save the current time for the next update 

    }

    if (minigameOpen) {
      feedButton.hide()
      drawMinigame()
      return
    }


    background("gray");

    if (rooms[currentRoom] === "Bedroom") {
      drawBedroom();
    }

    if (rooms[currentRoom] === "Kitchen") {
      drawKitchen();
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


    noStroke()
    fill(0, 0, 0, 100)
    rect(10, 15, 225, 160, 10)

    //drawing stats 

    for (let i = 0; i < stats.length; i++) {

     
      fill("gray");
      rect(20, 30 + i * 40, 100, 10, 5);

      fill("green");
      rect(20, 30 + i * 40, stats[i].value, 10, 10);

      fill("white");
      textSize(15);
      text(stats[i].name + ":" + stats[i].value, 140, 40 + i * 40);
    }

    //check if the pet is not sleeping or bathing 
    if (!isSleeping && !isBathing) {
      image(getPetImage(), 290, 300, 250, 250)
    }
    //check if the player is in the kitchen and the food menu is open 
    if (rooms[currentRoom] === "Kitchen" && foodMenuOpen) {
      drawFoodMenu()
    }
    // check if the player is in the kitchen, the food menu is open,
    // and a food product is selected
    if (rooms[currentRoom] === "Kitchen" && foodMenuOpen && selectFood !== -1) {
      feedButton.show()
    } else {
      feedButton.hide()
    }



    if (rooms[currentRoom] === "Bedroom" && clothingMenu) {
      drawClothingMenu()
    }

  }

  function keyPressed() {

    if (minigameOpen) {
      if (keyCode === ESCAPE) {
        // give the player a reward for the minigame
        rewardMinigame()
        //close the minigame
        minigameOpen = false
        //save the game progress 
        saveGame()
        return
      }
      if (gameOver && (key === "r" || key === "R")) {
        //reset the game over status 
        gameOver = false
        //reset the score 
        gameScore = 0
        // remove all enemy cars 
        enemyCars = []
        //main car position on the road
        mainCarX = 400
      
        roadOffset = 0
        //reset the enemy car timer 
        lastEnemySpawn = millis()
      }
      return
    }
    //dont allow room changes while sleeping or bathing 
    if (isSleeping || isBathing) {
      return
    }
    //move to the next room when the right arrow is passed 
    if (keyCode === RIGHT_ARROW) {
      currentRoom++;
    }
    //move to the previous room when the left arrow is pressed 
    if (keyCode === LEFT_ARROW) {
      currentRoom--;
    }
    //keep the room number within the available rooms
    currentRoom = constrain(currentRoom, 0, rooms.length - 1);

    //check if the player is not in the kitchen
    if (rooms[currentRoom] !== "Kitchen") {
      fridgeOpen = false
      foodMenuOpen = false
      selectFood = -1
    }
     //check if the player leaves the playroom while music is playing
    if (rooms[currentRoom] !== "Playroom" && musicPlaying) {
      music.pause()
      musicPlaying = false
    }

  }

  function mousePressed() {
    if (rooms[currentRoom] === "Bathroom") {
       //check if the player clicks on the bathtub
      if (mouseX > 180 && mouseX < 520 && mouseY > 270 && mouseY < 490) {
        startBath();
      }
      return
    }

    if (clothingMenu && rooms[currentRoom] === "Bedroom") {
       //check if the player clicks the option to remove clothes
      if (mouseX > 220 && mouseX < 340 && mouseY > 340 && mouseY < 380) {
        selectClothes = -1
        clothingMenu = false
        saveGame()
        return
      }
      //go through all available outfits
      for (let i = 0; i < clothes.length; i++) {
        let x = 230 + i * 100 //calculate the horizontal position of each outfit
        //check if the player clicks on an outfit
        if (mouseX > x && mouseX < x + 80 && mouseY > 200 && mouseY < 300) {
          selectClothes = i; //select the clicked outfit
          clothingMenu = false
          saveGame()
          return
        }
      }
      return
    }

    if (rooms[currentRoom] === "Bedroom") {
      if (mouseX > 30 && mouseX < 350 && mouseY > 330 && mouseY < 550) { //check if the player clicks on the bed
        if (isSleeping === false) { //check if the pet is awake
          sleep() //put the to sleep 
        } else {
          getUp() //wake up the pet 
        }
      }
    }

    if (rooms[currentRoom] === "Bedroom") {
      //check if the player clicks on the wardrobe
      if (mouseX > 580 && mouseX < 770 && mouseY > 210 && mouseY < 550) {
        clothing()
      }
    }
    if (rooms[currentRoom] === "Kitchen") {
      //check if the food menu is open 
      if (foodMenuOpen) {

        //check if the player clicks the X button
        if (mouseX > 565 && mouseX < 600 &&
          mouseY > 75 && mouseY < 110) {
          foodMenuOpen = false;
          selectFood = -1;
          return;
        }

        //go through all food products
        for (let i = 0; i < foodImages.length; i++) {
          let col = i % 3; //calculate the column number
          let row = floor(i / 3); //calculate the row number

          let x = 210 + col * 135;  //calculate the product's horizontal position
          let y = 125 + row * 105; //calculate the product's vertical position

          if (mouseX > x && mouseX < x + 110 &&
            mouseY > y && mouseY < y + 95) {
            selectFood = i;
            return;
          }
        }

        return;
      }

       //check if the player clicks on the fridge
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

    if (rooms[currentRoom] === "Playroom" && !minigameOpen) {
      if (mouseX > 375 && mouseX < 575 && mouseY > 180 && mouseY < 330) {
        mainCarX = 400   // move the player's car to the center
        enemyCars = [] //remove all enemy cars 
        lastEnemySpawn = millis() //reset the enemy car timer
        roadOffset = 0 //reset the road animation

        gameScore = 0 // reset the score 
        gameOver = false //reset the game over status 

        minigameOpen = true // start the minigame 
        return
      }
    }


    if (rooms[currentRoom] === "Playroom") {
      if (mouseX > 200 && mouseX < 290 && mouseY > 170 && mouseY < 220) {
        if (musicPlaying) {
          music.pause()
          musicPlaying = false
        } else {
          music.loop() // play the music on repeat
          musicPlaying = true
        }
        return
      }
    }

  }
window.addEventListener("beforeunload", function(){ // run this function before the player closes ort reloads the page 
  saveGame() //save the game progress 
})




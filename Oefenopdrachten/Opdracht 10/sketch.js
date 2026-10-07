
let buttons = []
let photos = [];
let currentPhoto = 0;
let colors = ["red","green","blue","orange","purple","yellow"];

let animals = ["elephant","giraffe","hippo","monkey","panda","parrot","penguin","pig",
  "rabbit","snake"];

function preload(){
  for (let i = 0; i < animals.length;  i++){
    photos.push(loadImage("assets/" + animals[i] + ".png"))

  }
}



function setup() {
  createCanvas(800, 400);

  for ( let i = 0; i< animals.length; i++){
    let button = createButton(animals[i])
    button.style("background", colors[i])
    button.position(20 + i* 100,20)
    button.mousePressed(function(){
      currentPhoto = i
    
      background(currentColor)

      for(let u = 0; u <buttons.length; u++){
        buttons[u].show()
      }

    
    })
    
    buttons.push(button)
  }
}

function draw() {
  background(220)
  image(photos[currentPhoto], 200, 100)
}

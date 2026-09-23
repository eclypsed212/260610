
//buttons
let buttons = [];
let board = [];
let currentPlayer = "red"
let gameOver = false;
let gameStarted = false;
let gameRestart = false;
function setup() {




  
  createCanvas(800, 800);
//start button
  let startbutton = createButton("Start")
  startbutton.position(390,75)
  startbutton.style("border-radius", "10px")
  startbutton.style("width", '115px')
  startbutton.style("height", "75px")
  startbutton.style("background", "green")
  startbutton.style("font-size", "18px")
  startbutton.style.fontFamily = 'Arial'
  
  startbutton.mousePressed(function(){
    gameStarted = true;
  })
  
//restart
  let restartbutton = createButton("Restart")
  restartbutton.position(390, 750)
   restartbutton.style("border-radius", "10px")
   restartbutton.style("width", '115px')
   restartbutton.style("height", "75px")
   restartbutton.style("background", "red")
   restartbutton.style("font-size", "18px")

   restartbutton.mousePressed(function(){
    gameRestart = true;
    
   })
  

  for (let i = 0; i < 9; i++) {
    board.push("")
  }

  for (let row = 0; row < 3; row++) {

    for (let coln = 0; coln < 3; coln++) {
      let index = row * 3 + coln;
      let button = createButton("");
      button.position(240 + coln * 120, 240 + row * 120);;
      buttons.push(button);
      button.style("border-radius", "5px")
      button.style("width", '115px')
      button.style("height", '120px')
      button.style("background-color", "#8c8c8c")
      button.style("border-radius", "outset")

      button.style('transition', 'transform 0,2s ease')



      button.mouseOver(function () {
        zoomIn(button);
      });

      button.mouseOut(function () {
        zoomOut(button);
      });

      button.mousePressed(function () {
        if (gameStarted == false){
          return
        }
        if(gameOver == true){
          return
        }
        if (board[index] == "") {
          board[index] = currentPlayer;

          if (currentPlayer == "red") {
            button.style("background", "red")
          } else {
            button.style("background", "blue")
          }
          if (currentPlayer == "red") {
            currentPlayer = "blue"
          } else {
            currentPlayer = "red"
          }
          console.log(board);
          checkVictory();
        }

      })
    }


    function zoomIn(button) {
      button.style("transform", "scale(1.1)");
    }

    function zoomOut(button) {
      button.style("transform", "scale(1)");
    }
  };


}
function checkVictory() {

  //horizantal

  if (board[0] == board[1] &&
    board[1] == board[2] &&
    board[0] != "") {
      gameOver = true;
    if (board[0] == "red") {
      console.log("Red wins!")
    } else {
      console.log("Blue wins!")
    }
  }

  if (board[3] == board[4] &&
    board[4] == board[5] &&
    board[5] != "") {
      gameOver= true;
    if (board[3] == "red") {
      console.log("Red wins!")
    } else {
      console.log("Blue wins!")
    }
  }
  if (board[6] == board[7] &&
    board[7] == board[8] &&
    board[8] != "") {
      gameOver = true
    if (board[6] == "red") {
      console.log("Red wins!")
    } else {
      console.log("Blue wins!")
    }
  }

  //vertical

  if (board[0] == board[3] &&
    board[3] == board[6] &&
    board[6] != "") {
      gameOver = true
    if (board[0] == "red") {
      console.log("Red wins!")
    } else {
      console.log("Blue wins!")
    }
  }
  if (board[1] == board[4] &&
    board[4] == board[7] &&
    board[7] != "") {
      gameOver = true;
    if (board[1] == "red") {
      console.log("Red wins!")
    } else {
      console.log("Blue wins!")
    }
  }
  if (board[2] == board[5] &&
    board[5] == board[8] &&
    board[8] != "") {
      gameOver = true;
    if (board[2] == "red") {
      console.log("Red wins!")
    } else {
      console.log("Blue wins!")
    }
  }
  //diagonal 

  if (board[0] == board[4] &&
    board[4] == board[8] &&
    board[8] != "") {
      gameOver = true;
    if (board[0] == "red") {
      console.log("Red wins!")
    } else {
      console.log("Blue wins!")
    }
  }

  if (board[2] == board[4] &&
    board[4] == board[6] &&
    board[6] != "") {
      gameOver = true;
    if (board[2] == "red") {
      console.log("Red wins!")
    } else {
      console.log("Blue wins!")
    }

  }
  


}
function draw() {
  background(220);


  //background
  fill(0)
  rect(210, 210, 400, 400, 25)

}


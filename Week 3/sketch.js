
//variables with arrays
let buttons = [];
let board = [];
let currentPlayer = "red"
let gameOver = false;
let gameStarted = false;
let gameRestart = false;
let clickSound;
let winner = "";



//click sound

function preload() {
  clickSound = loadSound("/sounds/click.wav");
}



//start the program
function setup() {
  createCanvas(800, 800);






  //style of start button
  let startbutton = createButton("Start")
  startbutton.position(390, 75)
  startbutton.style("border-radius", "10px")
  startbutton.style("width", '115px')
  startbutton.style("height", "75px")
  startbutton.style("background", "green")
  startbutton.style("font-size", "18px")
  startbutton.style.fontFamily = 'Arial'
  startbutton.mousePressed(function () {
    gameStarted = true;
  })

  //restart button style 
  let restartbutton = createButton("Restart")
  restartbutton.position(375, 700)
  restartbutton.style("border-radius", "10px")
  restartbutton.style("width", '115px')
  restartbutton.style("height", "75px")
  restartbutton.style("background", "red")
  restartbutton.style("font-size", "18px")

  //restart button function 
  restartbutton.mousePressed(function () {
    board = []
    for (let i = 0; i < 9; ++i) {
      board.push("")
    }
    currentPlayer = "red";
    gameOver = false;
    gameStarted = false;
    winner = "";


    for (let button of buttons) {
      button.style("background-color", "#8c8c8c")
    }



  })

  //buttons field
  for (let i = 0; i < 9; i++) {   // array with board where all data situated 
    board.push("")
  }
  for (let row = 0; row < 3; row++) { //create horizontal rows using array

    for (let coln = 0; coln < 3; coln++) { //create vertical colums using array 
      let index = row * 3 + coln; // index if the button is busy 
      let button = createButton("");
      //style of buttons
      button.position(240 + coln * 120, 240 + row * 120);;
      buttons.push(button);
      button.style("border-radius", "5px")
      button.style("width", '115px')
      button.style("height", '120px')
      button.style("background-color", "#8c8c8c")
      button.style("border-radius", "outset")


      button.style('transition', 'transform 0,2s ease') // 



      button.mouseOver(function () {
        zoomIn(button);
      });

      button.mouseOut(function () {
        zoomOut(button);
      });

      //function of start button 
      button.mousePressed(function () {
        if (gameStarted == false) {
          return //stop the function
        }
        if (gameOver == true) {
          return //stop the function 
        }


        if (board[index] == "") {

          board[index] = currentPlayer;

          clickSound.play()
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
      button.style("transform", "scale(1.1)"); // change the zoom scale to 1.1
    }

    function zoomOut(button) {
      button.style("transform", "scale(1)"); // got back
    }
  };


}
function checkVictory() {

  //horizantal combination
  if (board[0] == board[1] &&
    board[1] == board[2] &&
    board[0] != "") {
    winner = board[0];
    gameOver = true;
  }

  if (board[3] == board[4] &&
    board[4] == board[5] &&
    board[5] != "") {
    winner = board[3];
    gameOver = true;
  }
  if (board[6] == board[7] &&
    board[7] == board[8] &&
    board[8] != "") {
    winner = board[6];
    gameOver = true;
  }

  //vertical combination 

  if (board[0] == board[3] &&
    board[3] == board[6] &&
    board[6] != "") {
    winner = board[0];
    gameOver = true;
  }

  if (board[1] == board[4] &&
    board[4] == board[7] &&
    board[7] != "") {
    winner = board[1];
    gameOver = true;
  }
  if (board[2] == board[5] &&
    board[5] == board[8] &&
    board[8] != "") {
    winner = board[2];
    gameOver = true;
  }
  //diagonal combination 

  if (board[0] == board[4] &&
    board[4] == board[8] &&
    board[8] != "") {
    winner = board[0];
    gameOver = true;
  }


  if (board[2] == board[4] &&
    board[4] == board[6] &&
    board[6] != "") {
    winner = board[2];
    gameOver = true;
  }
}

function draw() {

  background(220);

  if (gameStarted == false) {
    background("white")
    
  }

  else if (currentPlayer == "red") {
    background("red")
  } else {
    background("blue")
  }

  fill(0)
  rect(210, 210, 400, 400, 25)


  if (gameStarted == false) {
    
    return
  }

  // player queue
  if (currentPlayer == "red") {
    textSize(25)
    text("Red turns", 50, 50)

  } else {
    textSize(25)
    text("Blue turns", 50, 50)
  }
  //text who win 
  if (winner == "red") {
    textSize(30);
    text("Red wins", 50, 100)
  }
  if (winner == "blue") {
    textSize(30);
    text("Blue wins", 50, 100)
  }


}


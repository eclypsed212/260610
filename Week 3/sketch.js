
//buttons
let buttons = [];
let board = [];
let currentPlayer = "red"
let playerwins = 0;

function setup() {




  
  createCanvas(800, 800);
  let resetbutton = createButton("reset")

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
    if (board[0] == "red") {
      console.log("Red wins!")
    } else {
      console.log("Blue wins!")
    }
  }

  if (board[3] == board[4] &&
    board[4] == board[5] &&
    board[5] != "") {
    if (board[3] == "red") {
      console.log("Red wins!")
    } else {
      console.log("Blue wins!")
    }
  }
  if (board[6] == board[7] &&
    board[7] == board[8] &&
    board[8] != "") {
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
    if (board[0] == "red") {
      console.log("Red wins!")
    } else {
      console.log("Blue wins!")
    }
  }
  if (board[1] == board[4] &&
    board[4] == board[7] &&
    board[7] != "") {
    if (board[1] == "red") {
      console.log("Red wins!")
    } else {
      console.log("Blue wins!")
    }
  }
  if (board[2] == board[5] &&
    board[5] == board[8] &&
    board[8] != "") {
    if (board[2] == "red") {
      console.log("Red wins!")
    } else {
      console.log("Blue wins!")
    }
  }
  //diagonal 

  if (board[0] == board[4] &&
    board[4] == board[8] &&
    board[8] == "") {
    if (board[0] == "red") {
      console.log("Red wins!")
    } else {
      console.log("Blue wins!")
    }
  }

  if (board[2] == board[4] &&
    board[4] == board[6] &&
    board[6] != "") {
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


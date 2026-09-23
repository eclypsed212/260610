
//buttons
let buttons = [];
let board = [];
let currentPlayer = "red"


function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 9; i++){
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
        if (board[index] == ""){
          board[index] = currentPlayer;

        if (currentPlayer == "red"){
          button.style("background" ,"red")
        }else{
          button.style("background", "blue")
        }
        if(currentPlayer == "red"){
          currentPlayer = "blue"
        }else{
          currentPlayer = "red"        
        }
        console.log(board);
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


//victory check data



function draw() {
  background(220);


  //background
  fill(0)
  rect(210, 210, 400, 400, 25)

}


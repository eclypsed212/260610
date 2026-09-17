function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let a = random (100);
  let b = prompt("Write number") ;

  

  if ( a < b ){
    console.log(a, " is kleiner dan", b)
  }
  if (a > b){
    console.log(a, "is grooter dan", b)

  }
  if (a == b){
    console.log( a, "is gelijk aan", b)
  }
  
}

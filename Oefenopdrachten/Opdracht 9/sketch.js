
let score = 0; //variable with score points 
let balls = [] // array with balls

function setup() {
  createCanvas(400, 400);
  createBalls()

}


function createBalls(){     //function of making balls
  for (let i = 0; i < 10; i ++){
  let ball = {
    x:random(width), // random x count 
    y:random(height),// random y count
    size: random(10,50),// random size 
    xSpeed:random(-5,5),// random speed for x
    ySpeed:random(-5,5),// random speed for y 
    
    color: {
      r: random(0,255), // random count of r
      g: random(0,255), // random count of g
      b: random(0,255), // random count of b

    }
}
balls.push(ball); //adding ball to array balls 
}
  
}

function draw() {
  background(220);

  for(let ball of balls){    // Loop through all balls
    //set the ball color
    fill(ball.color.r,ball.color.g,ball.color.b)
    //draw the ball
    circle(ball.x,ball.y,ball.size)
  }

  for (let i = 0; i < balls.length; i++){ 

    let ball = balls[i] // take one ball from aray
    if(ball.x + ball.xSpeed < 0 || ball.x + ball.xSpeed > width ){ 
      ball.xSpeed *= -1; // reverse the horizontal direction 
    }
    if (ball.y + ball.ySpeed < 0 || ball.y + ball.ySpeed > height) {
      ball.ySpeed *= -1; //reverse the verticald direction
    }

    ball.x += ball.xSpeed; // move the ball  horizontal
    ball.y += ball.ySpeed // move the ball vertical
  }


  //text of score points 
  fill(0) 
  textSize(20)
  text("Score:" + score, 20,30)


  if (balls.length === 0){ // add new balls if you cath all 10 balls 
    createBalls();
  }
}
function mousePressed(){
  for (let i = balls.length - 1; i >= 0; i--){

    let ball = balls[i] // take one ball from array 
    let distance = dist(mouseX, mouseY, ball.x, ball.y) //check position of the mouse 

    if (distance < ball.size){ // if ball disappear, score ++1 
      score++;
      balls.splice(i,1)
    }
  }
}



let Xpos = [];
let Ypos = [];
let SizePos =[];
let colors =[];
let speed = 0;



  


function setup() {
  createCanvas(800,600);

for(let i = 0; i<100; i++){
 Xpos.push (random(0,800))
 Ypos.push (random(0,600))
 SizePos.push (random(0,100))
 colors.push(color(random(0,255),random(0,255),random(0,255)))
}
 
}

function draw() {
  background(220);

 

  for(let i = 0; i<100; i++ ){

    Ypos[i] = Ypos[i] + random(-2,2)
    
    if(Ypos[i]>600){
      Ypos[i] = 0;
    }


  
    fill(colors[i])
    circle(Xpos[i],Ypos[i], SizePos[i])
    
  }

}

function setup() {
  createCanvas(400, 200);
  background(220)
  getRandom()

}
function getRandom(){
  let score = Math.floor(Math.random() * 101);


  if (score >=90 ){
    console.log("Uitstekend");
    fill(53,255,0)
    rect(50,50,50,50)

    }else if (score >= 70 && sccore <=89) {
      console.log("Goed gedaan!")
      fill(255,251,0)
      rect(50,50,50,50)

      
    }else if (score >= 50 && score <=69){
      console.log("Voldoende")
      fill(255,136,0)
      rect(50,50,50,50)

    }
    else {
      console.log("Onvoldoende")
      fill(255,0,0)
      rect(50,50,50,50)
    }

    fill(0)
    textSize(32)
    text(score, 200,100)
  }





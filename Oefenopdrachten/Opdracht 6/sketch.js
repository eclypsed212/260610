
let colors = [];

function setup() {
  createCanvas(380, 350);
  
  
}

function draw() {
  background(220);

 fill("black")
 text("1.",20,15)
  fill("black")
 text("2.",20,100)
  fill("black")
 text("3.",20,190)
  fill("black")
 text("4.",20,250)
  fill("black")
 text("5.",120,15)
  fill("black")
 text("6.",120,100)
  fill("black")
 text("7.",120,190)
  fill("black")
 text("8.",120,280)
  fill("black")
 text("9.",240,15)



 //1

 
let colors = ["red", "green", "blue", "purple","yellow"]
 for(i = 0; i < colors.length; i++){
  fill(colors[i])
  text(colors[i], 30,20+i*15)
  
 }


 //2 

 let colors1 = ["red", "green", "blue", "purple","yellow"]

  let firstColor = colors1.shift()
  colors1.push(firstColor)


 for(i = 0; i < colors1.length; i++){
  fill(colors1[i])
  text(colors1[i], 30,100+i*15)
 }

//3
let colors2 =  ["red", "green", "blue", "purple","yellow"]


colors2.splice(2,2)

for( i = 0; i < colors2.length; i++){
  fill(colors2[i])
  text(colors2[i],30, 190+i*15)
}

//4

let numbers =[400,240,10,490,30,60,244,500,301,300]
let y = 250
for(i = 0; i < numbers.length; i++){
  

  if(numbers[i] < 300){
    fill(0)
    text(numbers[i],30, 250+i*10)
    //y = y + i * 5
    
  }
  
}

//5 


let total = 0;
let numbers1 = [3,55,93,20,102,6]
let numbers2 = [14,22,80,5]

for (let i = 0; i < numbers1.length; i++){
  total = total + numbers1[i]
}

for (let i = 0; i < numbers2.length; i++){
  total = total + numbers2[i]
}

fill(0)
textSize(20)
stroke(10)
text(total, 130,45)

textSize(12)
noStroke()

//6

let word = "Overheidsfinancieringstekort";
let count = 0;

for( i = 0; i<word.length; i++){

  if(word[i] == "e"){
    count++;
  }
  
}
fill(0)
text(count, 130,100 )


//7


let colors3 = ["red", "green","blue", "purple", "yellow"];
colors3.sort()
for(i = 0; i<colors3.length; i++){

  fill(colors3[i])
  text(colors3[i], 150,200 + i *10)
  
}


//8


for(i=0; i<5; i++){
  stroke(1)
  colors.push(color(random(255),random(255),random(255)))
  rect(130 + i*25,280,25,25)
  
}
}

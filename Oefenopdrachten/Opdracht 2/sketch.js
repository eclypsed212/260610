function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

// cijfer
let x = 100 
text ( x, 20,20 );

//variable met text (met const)
const greeting = "Hello world!"
text( greeting, 20,60)

// alle variabelen met plus/min/vermenigvuldingen/delen 
let a = 20; 
let b = 10; 
let optellen = a + b;
let aftrekken = a - b; 
let vermenigvuldigen = a * b; 
let delen = a - b;


text ("Optellen: " + optellen, 20,80)
text ("Aftreken: " + aftrekken, 20,100)
text ("Vermenigvuldigen: " + vermenigvuldigen, 20,120)
text ("Delen: " + delen, 20, 140)



}

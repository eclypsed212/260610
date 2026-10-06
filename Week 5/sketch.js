let score = 0;
let currentQuestion = 0;
let screen = "start"

let questions = [
  //easy level
  {
    difficulty: "easy",
    question:"What is the main role of a graphics card (GPU)?",
    answer: [ 
      "Process graphics and images", 
      "Store files", 
      "Control the keyboard", 
      "Power the computer",
    ],
    correct: 0
  },

  {
    difficulty: "easy",
    question:"What is the main function of a processor(CPU)",
    answer: [ 
      "Process instructions and data", 
      "Store files", 
      "Display images", 
      "Provide electricity",
    ],
    correct: 0

  },

  {
    difficulty: "easy",
    question:"What is RAM used for?",
    answer:[
      "Temporary storage for running programs",
      "Permanent file storage",
      "Cooling the CPU",
      "Connecting to the internet",
    ],
    correct: 0
  },

  {
   difficulty: "easy",
   question:"Which component is used to store files permanently?",
   answer:[
    "RAM",
    "CPU",
    "SSD",
    "GPU",
   ],
   correct:2
  },

  {
    difficulty: "easy",
    question:"What does PSU stand for?",
    answer:[ 
      "Personal Storage Unit",
      "Processing System Unit",
      "Power Supply Unit",
      "Power System Utility",
      
    ],
    correct:2
  },

  //medium level
  {
    difficulty: "medium",
    question:"What is the main purpose of a motherboard?",
    answer:[ 
      "Cooling the system",
      "Store all files",
      "Process graphics",
      "Connect and allow communication between components",
    ],
    correct:3
  },

  {
    difficulty: "medium",
    question:"What is the main purpose of a CPU cache?",
    answer:[ 
      "To permanently store personal files",
      "To give the CPU faster access to frequently used data",
      "Provides more video memory",
      "To provide power to the motherboard",
    ],
    correct: 1
  },

   {
    difficulty: "medium",
    question:"What is the main advantage of an SSD over an HDD?",
    answer:[ 
      "It is usually smaller in size",
      "It always has more storage",
      "It is usually faster",
      "It produces more power",
    ],
    correct: 2
  },

  {
    difficulty: "medium",
    question:"Why does a gaming PC need a good GPU?",
    answer:[ 
      "To provide electricity to the CPU",
      "To store game files permanently",
      "To increase the monitor's refresh rate (Hz)",
      "To render graphics and images efficiently",
    ],
    correct:3
  },

  {
    difficulty: "medium",
    question:"What can happen if a computer does not have enough RAM?",
    answer:[ 
      "It slows down the Wi-Fi speed",
      "The use of SSD storage is beginning",
      "The GPU becomes physically hotter immediately",
      "Programs can become slower",
    ],
    correct:3
  },

  //hard
  {
    difficulty: "hard",
    question:"What is the main difference between CPU and GPU?",
    answer:[
      "CPU stores files, while a GPU stores programs",
      "CPU is designed for general processing, while a GPU is optimized for parallel graphics processing",
      "CPU provides power, while a GPU provides cooling",
      "A CPU connects to the internet, while a GPU controls USB devices",
    ],
    correct:1
  },

   {
    difficulty: "hard",
    question:"Why can faster RAM improve computer performance?",
    answer:[
      "It increases the storage capacity of an SSD",
      "It increases the physical size of the CPU",
      "It replaces the graphics card",
      "It can allow the CPU to access frequently needed data more quickly",
    ],
    correct: 3
  },

   {
    difficulty: "hard",
    question:"What can happen to CPU performance when it becomes too hot?",
    answer:[
      "The CPU can reduce its speed to lower its temperature",
      "The computer might shut down",
      "The GPU becomes faster",
      "The RAM turns into permanent storage",
    ],
    correct:0
  },

   {
    difficulty: "hard",
    question:"Why is a powerful PSU important when building a gaming PC?",
    answer:[
      "It must provide enough stable power for all components",
      "It makes all components automatically work faster",
      "It makes the CPU physically larger",
      "It replaces the motherboard",
    ],
    correct:0
  },

   {
    difficulty: "hard",
    question:"What is a major advantage of having a CPU with multiple cores?",
    answer:[
      "It can handle multiple tasks more efficiently",
      "It automatically doubles the storage capacity",
      "It makes the GPU unnecessary",
      "Boosts FPS",
    ],
    correct:0
  },

  {
    difficulty:"extreme hard",
    question:"What does computer lighting do?",
    answer:[
      "Cool down",
      "Gives more FPS",
      "For beauty",
      "Improves computer performance",
    ],
    correct: 2
  },

  {
    difficulty:"extreme hard",
    question: "What fluid is used for water cooling?",
    answer:[
      "Alcohol",
      "Coolant",
      "Water",
      "Novec(Dry Water)",

    ],
    correct:1
  }

]



function setup() {
  createCanvas(800, 600);
}

function drawQuestion(){
  let question = questions[currentQuestion]

  textSize(25)
  text(question.question, 50,100)

  for (let i = 0; i < 4; i++){
    let anwerY = 200 + i * 80 
    rect(50,anwerY,700,60)
    text(question.answer[i], 70, anwerY + 38)
  }
}

function draw() {
  background(220);

  drawQuestion()
}

function mousePressed(){
  for (let i = 0; i < 4; i++){
    let anwerY = 200 + i * 80



    if (mouseX > 50 && mouseX < 750 && mouseY > anwerY && mouseY < anwerY + 60){
      if (i === questions[currentQuestion].correct){
        score++;
      }
      currentQuestion++;
    }
  }
}

let score = 0;
let currentQuestion = 0;
let screen = "start";
let startButton;
let timeLeft = 15;
let restartButton;

//download the font for the quiz
function preload() {
  myFont = loadFont("./fonts/LexendGiga-VariableFont_wght.ttf");
  bg = loadImage("./images/pcbuild.jpg");
}

// make array with objects (questions)
let questions = [
  //easy level
  {
    difficulty: "easy",
    question: "What is the main role of a graphics card (GPU)?",
    answer: [
      "Process graphics and images",
      "Store files",
      "Control the keyboard",
      "Power the computer",
    ],
    correct: 0,
  },

  {
    difficulty: "easy",
    question: "What is the main function of a processor(CPU)?",
    answer: [
      "Process instructions and data",
      "Store files",
      "Display images",
      "Provide electricity",
    ],
    correct: 0,
  },

  {
    difficulty: "easy",
    question: "What is RAM used for?",
    answer: [
      "Temporary storage for running programs",
      "Permanent file storage",
      "Cooling the CPU",
      "Connecting to the internet",
    ],
    correct: 0,
  },

  {
    difficulty: "easy",
    question: "Which component is used to store files permanently?",
    answer: ["RAM", "CPU", "SSD", "GPU"],
    correct: 2,
  },

  {
    difficulty: "easy",
    question: "What does PSU stand for?",
    answer: [
      "Personal Storage Unit",
      "Processing System Unit",
      "Power Supply Unit",
      "Power System Utility",
    ],
    correct: 2,
  },

  //medium level
  {
    difficulty: "medium",
    question: "What is the main purpose of a motherboard?",
    answer: [
      "Cooling the system",
      "Store all files",
      "Process graphics",
      "Connect and allow communication between components",
    ],
    correct: 3,
  },

  {
    difficulty: "medium",
    question: "What is the main purpose of a CPU cache?",
    answer: [
      "To permanently store personal files",
      "To give the CPU faster access to frequently used data",
      "Provides more video memory",
      "To provide power to the motherboard",
    ],
    correct: 1,
  },

  {
    difficulty: "medium",
    question: "What is the main advantage of an SSD over an HDD?",
    answer: [
      "It is usually smaller in size",
      "It always has more storage",
      "It is usually faster",
      "It produces more power",
    ],
    correct: 2,
  },

  {
    difficulty: "medium",
    question: "Why does a gaming PC need a good GPU?",
    answer: [
      "To provide electricity to the CPU",
      "To store game files permanently",
      "To increase the monitor's refresh rate (Hz)",
      "To render graphics and images efficiently",
    ],
    correct: 3,
  },

  {
    difficulty: "medium",
    question: "What can happen if a computer does not have enough RAM?",
    answer: [
      "It slows down the Wi-Fi speed",
      "The use of SSD storage is beginning",
      "The GPU becomes physically hotter immediately",
      "Programs can become slower",
    ],
    correct: 3,
  },

  //hard
  {
    difficulty: "hard",
    question: "What is the main difference between CPU and GPU?",
    answer: [
      "CPU stores files, while a GPU stores programs",
      "CPU handles general tasks, while GPU processes graphics.",
      "CPU provides power, while a GPU provides cooling",
      "A CPU connects to the internet, while a GPU controls USB devices",
    ],
    correct: 1,
  },

  {
    difficulty: "hard",
    question: "Why can faster RAM improve computer performance?",
    answer: [
      "It increases the storage capacity of an SSD",
      "It increases the physical size of the CPU",
      "It replaces the graphics card",
      "It can allow the CPU to access frequently needed data more quickly",
    ],
    correct: 3,
  },

  {
    difficulty: "hard",
    question: "What can happen to CPU performance when it becomes too hot?",
    answer: [
      "The CPU can reduce its speed to lower its temperature",
      "The computer might shut down",
      "The GPU becomes faster",
      "The RAM turns into permanent storage",
    ],
    correct: 0,
  },

  {
    difficulty: "hard",
    question: "Why is a powerful PSU important when building a gaming PC?",
    answer: [
      "It must provide enough stable power for all components",
      "It makes all components automatically work faster",
      "It makes the CPU physically larger",
      "It replaces the motherboard",
    ],
    correct: 0,
  },

  {
    difficulty: "hard",
    question: "What is a major advantage of having a CPU with multiple cores?",
    answer: [
      "It can handle multiple tasks more efficiently",
      "It automatically doubles the storage capacity",
      "It makes the GPU unnecessary",
      "Boosts FPS",
    ],
    correct: 0,
  },

  {
    difficulty: "extreme hard",
    question: "What does computer lighting do?",
    answer: [
      "Cool down",
      "Gives more FPS",
      "For beauty",
      "Improves computer performance",
    ],
    correct: 2,
  },

  {
    difficulty: "extreme hard",
    question: "What fluid is used for water cooling?",
    answer: ["Alcohol", "Coolant", "Water", "Novec(Dry Water)"],
    correct: 1,
  },
];

//function for drawing Start screen
function drawStartScreen() {
  textAlign(CENTER); // place the text between the coordination of text
  textSize(50);
  fill("White");
  text("PC Quiz", width / 2, 150);

  textSize(25);
  text("Test your knowledge", width / 2, 220);

  textAlign(LEFT);
}

//function for drawing the EndScreen
function drawEndScreen() {
  textAlign(CENTER);

  textSize(25);
  text("Quiz finished", width / 2, 150);

  textSize(30);
  text("Your score" + score + "/" + questions.length, width / 2, 250); //total scores in Endscreen

  textAlign(LEFT);
}

//function for hide the start button after click
function restartQuiz(){
  score = 0;
  currentQuestion = 0;
  timeLeft = 15
  shuffleQuestion()
  screen = "quiz"
  restartButton.hide()
}


function startQuiz() {
  timeLeft = 15;
  shuffleQuestion();
  screen = "quiz";
  startButton.hide();
}

function shuffleQuestion() {
  questions.sort(() => random(-1, 1));

  for (let question of questions) {
    let correctAnswer = question.answer[question.correct];
    question.answer.sort(() => random(-1, 1));
    question.correct = question.answer.indexOf(correctAnswer);
  }
}

function setup() {
  //create the start button
  createCanvas(890, 600);
  textFont(myFont);
  startButton = createButton("Start");
  startButton.position(350, 350);
  startButton.style("background", "white");
  startButton.style("border-radius", "10px");
  startButton.style("width", "200px");
  startButton.style("height", "70px");

  startButton.mousePressed(startQuiz); // if you pressed the button the quiz will start


  restartButton = createButton("Restart")
  restartButton.position(345,350)
  restartButton.size(200,70)
  restartButton.style("background","white")
  restartButton.style("border-radius", "10px")
  restartButton.style("font-family", "Lexend Giga")
  

  restartButton.mousePressed(restartQuiz);
  restartButton.hide()
}


//function for drawing questions and also answers
function drawQuestion() {
  let question = questions[currentQuestion];
  textAlign(LEFT);
  textSize(25);
  text(question.question, 50, 100);

  for (let i = 0; i < 4; i++) {
    // for loop with answers
    let answerY = 200 + i * 80;
    fill("black");
    rect(50, answerY, 700, 60, 5);
    fill("white");
    stroke("white");

    let answerText = question.answer[i]

    if(answerText.length > 55){
      textSize(13)
    }else if ( answerText.length > 35){
      textSize(15)
    }else {
       textSize(18)
    }
    text(answerText, 70, answerY + 38); // take one question from our array
  }
  timeLeft -= deltaTime / 1000;

  if (timeLeft <= 0) {
    timeLeft = 0;
    currentQuestion++;

    if (currentQuestion >= questions.length) {
      screen = "end";
      
    } else {
      timeLeft = 15;
    }
  }

  textAlign(RIGHT);
  fill("White");
  textSize(12);

  text("Time:" + ceil(timeLeft), 850, 50);
}

function draw() {
  background(bg);
  if (screen === "start") {
    drawStartScreen();
  }
  if (screen === "quiz") {
    drawQuestion();
  }

  if (screen === "end") {
    drawEndScreen();
    restartButton.show()
  }
}

function mousePressed() {
  for (let i = 0; i < 4; i++) {
    let answerY = 200 + i * 80;
    if (
      mouseX > 50 &&
      mouseX < 750 &&
      mouseY > answerY &&
      mouseY < answerY + 60
    ) {
      //check the mouse position for choosing the answer
      if (i === questions[currentQuestion].correct) {
        score++;
      }
      currentQuestion++;
      timeLeft = 15;

      if(currentQuestion >= questions.length){
        screen = "end"
      }
      break
    }
  }
}

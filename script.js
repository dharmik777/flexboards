var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
];

var myElement = document.querySelector("questions");
  myElement.getElementsByClassName.backgroundColor = "#D93600"

var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");

var questionIndex = 0;
var correctCount = 0;

// add variables to hold the time and intervaliD for the timer

var intervalId;
var time = 20;


function endQuiz() {
  // clear Interval
  // update DOM to indicate game is over
  clearInterval(intervalId);
  document.body.innerHTML = "<h1> Gamer OVer </h1>"
}

function updateTime(){
  //decrement time
  //if time is = end quiz
  time--;
  if (time <=0 ){
    endQuiz();
  }


}

function renderQuestion() {

  if (time === 0){
    updateTime ();
  }

  //add a timer that will call updateTime every second

  intervalId = setInterval(updateTime, 1000)

  questionEl.textContent = questions[questionIndex].question;

  optionListEl.innerHTML = "";
  questionResultEl.innerHTML = "";

  var choices = questions[questionIndex].choices;
  var choicesLength = choices.length;

  for (var i = 0; i < choicesLength; i++) {
    var questionListItem = document.createElement("li");
    questionListItem.textContent = choices[i];
    optionListEl.append(questionListItem);
  }
}

function nextQuestion() {
  questionIndex++;
  // when all question are asked end quiz
  if (questionIndex === questions.length){
    timer = 0;
  }
  renderQuestion();
}

function checkAnswer(event) {
  // pause timer 
  clearInterval(intervalId)

  if (event.target.matches("li")) {
    var answer = event.target.textContent;
    if (answer === questions[questionIndex].answer) {
      questionResultEl.textContent = "Correct";
      correctCount++;
    } else {
      questionResultEl.textContent = "Incorrect";
      time -=2;
      // subtract 2 seconds from time.
    }
  }
  setTimeout(nextQuestion, 2000);
}

renderQuestion();
optionListEl.addEventListener("click", checkAnswer);

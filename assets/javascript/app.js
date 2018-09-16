//An array of objects that holds the questions and answer choices
var quizQuestions =
  [{
    question: "What is the princess's name in Aladdin?",
    answer: "Jasmine",
    guess1: "Jalissa",
    guess2: "Jennifer",
    value: "one",
  },
  {
    question: "In Aladdin, what is the name of Jasmine’s pet tiger?",
    answer: "Rajah",
    guess1: "Abu",
    guess2: "Iago",
    value: "two",
  },
  {
    question: "In the Lion King, where does Mufasa and his family live?",
    answer: "Pride Rock",
    guess1: "Agrabah",
    guess2: "India",
    value: "three",
  },
  {
    question: "During the battle with Aladdin, what type of animal does Jafar transform himself into?",
    answer: "Cobra",
    guess1: "Carpet",
    guess2: "Pig",
    value: "four",
  },
  {
    question: "What was the name of the dragon in Mulan",
    answer: "Mushu",
    guess1: "Jin",
    guess2: "Hun",
    value: "five",
  }];

let correctAnswers = 0;
let wrongAnswers = 0;
let unanswered = 0;
var seconds = 30;
var timeLeft = seconds;

function gameOverScreen() {
  $("#gameDisplay").empty();
  $("#gameDisplay").append("<div class='col' id='finishScreen'>");
  $("#finishScreen").append(`<h2>FINISHED!</h2>`);
  $("#finishScreen").append(`<p>Answers Correct: ${correctAnswers}</p>`);
  $("#finishScreen").append(`<p>Answers Wrong: ${wrongAnswers}</p>`);
  $("#finishScreen").append(`<p>Unanswered: ${unanswered}</p>`);
}


function quizOver() {

  if ($("#button1").is(":checked")) {
    // console.log("Correct!");
    correctAnswers += 1;
  } else if ($(`#button2`).is(`:checked`) || $(`#button3`).is(`:checked`)) {
    // console.log("Try Again!")
    wrongAnswers += 1;
  } else {
    unanswered += 1;
  };

  if ($("#button6").is(":checked")) {
    // console.log("Correct!");
    correctAnswers += 1;
  } else if ($(`#button4`).is(`:checked`) || $(`#button5`).is(`:checked`)) {
    // console.log("Try Again!")
    wrongAnswers += 1;
  } else {
    unanswered += 1;
  };

  if ($("#button8").is(":checked")) {
    // console.log("Correct!");
    correctAnswers += 1;
  } else if ($(`#button7`).is(`:checked`) || $(`#button9`).is(`:checked`)) {
    // console.log("Try Again!")
    wrongAnswers += 1;
  } else {
    unanswered += 1;
  };

  if ($("#button11").is(":checked")) {
    // console.log("Correct!");
    correctAnswers += 1;
  } else if ($(`#button10`).is(`:checked`) || $(`#button12`).is(`:checked`)) {
    // console.log("Try Again!")
    wrongAnswers += 1;
  } else {
    unanswered += 1;
  };

  if ($("#button13").is(":checked")) {
    // console.log("Correct!");
    correctAnswers += 1;
  } else if ($(`#button14`).is(`:checked`) || $(`#button15`).is(`:checked`)) {
    // console.log("Try Again!")
    wrongAnswers += 1;
  } else {
    unanswered += 1;
  };
};


//A function that appends the quizQuestions to the gameDisplay.
function triviaGame() {

  var addTimer = function () {
    $("#timerDisplay").html(`<p id="time">${timeLeft}</p>`);
    timeLeft--;
    console.log(timeLeft)
    if (timeLeft === 0) {
    clearInterval(countdown);
    }
  };

  var countdown = setInterval(addTimer, 1000);

  var endGame = function () {
    $("#timerDisplay").remove();
    quizOver();
    gameOverScreen();
    clearInterval(countdown);
    clearInterval(gameOver);
  };

  var gameOver = setInterval(endGame,1000 * seconds)

  $("#gameDisplay").append("<div class='col-12' id='quiz'>");
  $("#quiz").append("<div class='col-12' id='timerDisplay'>");

  $("#quiz").append(`<p id="question1">${quizQuestions[0].question}`);
  $("#question1").append("<form id='form1'>");
  $("#form1").append("<input type='radio' name='game' class='buttonChoice' id='button1' />");
  $("#form1").append(`${quizQuestions[0].answer}`);
  $("#form1").append("<input type='radio' name='game' class='buttonChoice' id='button2' />");
  $("#form1").append(`${quizQuestions[0].guess1}`);
  $("#form1").append("<input type='radio' name='game' class='buttonChoice' id='button3' />");
  $("#form1").append(`${quizQuestions[0].guess2}`);

  $("#quiz").append(`<p id="question2">${quizQuestions[1].question}`);
  $("#question2").append("<form id='form2'>");
  $("#form2").append("<input type='radio' name='game' class='buttonChoice' id='button4' />");
  $("#form2").append(`${quizQuestions[1].guess2}`);
  $("#form2").append("<input type='radio' name='game' class='buttonChoice' id='button5' />");
  $("#form2").append(`${quizQuestions[1].guess1}`);
  $("#form2").append("<input type='radio' name='game' class='buttonChoice' id='button6' />");
  $("#form2").append(`${quizQuestions[1].answer}`);

  $("#quiz").append(`<p id="question3">${quizQuestions[2].question}`);
  $("#question3").append("<form id='form3'>");
  $("#form3").append("<input type='radio' name='game' class='buttonChoice' id='button7' />");
  $("#form3").append(`${quizQuestions[2].guess1}`);
  $("#form3").append("<input type='radio' name='game' class='buttonChoice' id='button8' />");
  $("#form3").append(`${quizQuestions[2].answer}`);
  $("#form3").append("<input type='radio' name='game' class='buttonChoice' id='button9' />");
  $("#form3").append(`${quizQuestions[2].guess2}`);

  $("#quiz").append(`<p id="question4">${quizQuestions[3].question}`);
  $("#question4").append("<form id='form4'>");
  $("#form4").append("<input type='radio' name='game' class='buttonChoice' id='button10' />");
  $("#form4").append(`${quizQuestions[3].guess1}`);
  $("#form4").append("<input type='radio' name='game' class='buttonChoice' id='button11' />");
  $("#form4").append(`${quizQuestions[3].answer}`);
  $("#form4").append("<input type='radio' name='game' class='buttonChoice' id='button12' />");
  $("#form4").append(`${quizQuestions[3].guess2}`);

  $("#quiz").append(`<p id="question5">${quizQuestions[4].question}`);
  $("#question5").append("<form id='form5'>");
  $("#form5").append("<input type='radio' name='game' class='buttonChoice' id='button13' />");
  $("#form5").append(`${quizQuestions[4].answer}`);
  $("#form5").append("<input type='radio' name='game' class='buttonChoice' id='button14' />");
  $("#form5").append(`${quizQuestions[4].guess1}`);
  $("#form5").append("<input type='radio' name='game' class='buttonChoice' id='button15' />");
  $("#form5").append(`${quizQuestions[4].guess2}`);

  $("#quiz").append("<button id='submit'>Submit</button>");

  $("#submit").click(function () {
    $("#timerDisplay").remove();
    quizOver();
    gameOverScreen();
    clearInterval(countdown);
    clearInterval(gameOver);
  })
}

$(document).ready(function () {

  //adds button to the DOM
  $("#playButtonHolder").append("<button id='playGame'>");
  $("#playGame").text("PLAY");

  $("#playGame").click(function () {
    $("#playButtonHolder").remove();
    triviaGame();
  })

});
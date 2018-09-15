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

//A function that appends the quizQuestions to the gameDisplay.
function triviaGame() {
    $("#gameDisplay").append("<div class='col' id='quiz'>");
    //   for (var i = 0; i < quizQuestions.length; i++) {
    //     $("#quiz").append(`<p>${quizQuestions[i].question}</p>`);
    //     $("#quiz").append(`<form id="quizForm">`);
    //     $("#quiz").append(`<input type="radio" name="test" id="radioAnswer" value="${quizQuestions[i].value}" />`);       
    //     $("#radioAnswer").append(`${quizQuestions[i].answer}`);
    //   };
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
        if ($("#button1").is(':checked') && $("#button6").is(':checked') && $("#button8").is(':checked') && $("#button11").is(':checked') && $("#button13").is(':checked')) {
            console.log("Correct!");
        } else {
            console.log("Try Again!")
        }
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
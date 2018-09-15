//An array of objects that holds the questions and answer choices
var quizQuestions =
    [{
        question: "What is the princess's name in Aladdin?",
        answer: "Jasmine",
        guess1:"Jalissa",
        guess2:"Jennifer",
        value: "one",
    },
    {
        question: "In Aladdin, what is the name of Jasmine’s pet tiger?",
        answer: "Rajah",
        guess1:"Abu",
        guess2:"Iago",
        value: "two",
    },
    {
        question: "In the Lion King, where does Mufasa and his family live?",
        answer: "Pride Rock",
        value: "three",
    },
    {
        question: "During the battle with Aladdin, what type of animal does Jafar transform himself into?",
        answer: "A Cobra",
        value: "four",
    },
    {
        question: "What was the name of the dragon in Mulan",
        answer: "Mushu",
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
    $("#form2").append("<input type='radio' name='game1' class='buttonChoice' id='button4' />");
    $("#form2").append(`${quizQuestions[1].answer}`);
    $("#form2").append("<input type='radio' name='game1' class='buttonChoice' id='button5' />");
    $("#form2").append(`${quizQuestions[1].guess1}`);
    $("#form2").append("<input type='radio' name='game1' class='buttonChoice' id='button6' />");
    $("#form2").append(`${quizQuestions[1].guess2}`);

    $(".buttonChoice").click(function() {
        if ($("#button1").is(':checked') && $("#button4").is(':checked')) {
            console.log("Correct!");
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
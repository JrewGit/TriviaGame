#Make title "page":
  Make title;
  Have a start button that launches the game;
    if the start button is clicked:
      clear the screen of everything except the title;
      start the game (append);

#Make the actual quiz:
  Keep title;
  start a timer:
    if the timer hits 0:
      end game;
  Make questions;
  Make answers that are radio buttons;
    make a variable that tracks the users choices;
  Make a finished button:
    if the finshed button is clicked:
      show finsh screen;

#Make the finish screen:
  Make variables for correct answers, wrong answers, and unanswered;
  Make a list of the correct answers:
  if the users choices match the correct answer:
    correct answers increases by 1;
  else if the user choices don't match the correct answer:
    wrong answer increases by 1;
  else if the user doesnt have an answer:
    unanswered increases by 1;

#Make reset button:
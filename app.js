//alert(' Hello, I\'m going to ask you some questions about me. Please click "ok", then answer Y or N to the questions.');

//var questionOne = prompt('Do I have brown hair?');
//console.log('userResponse:' + questionOne);

//if (questionOne.toLowerCase() === 'n' || //questionOne.toUpperCase() === 'NO') {
//  alert(' Regular eye exams are key to good health ')
//} else if (questionOne.toLowerCase() === 'y' || //questionOne.toUpperCase() === 'YES') {
//  alert('Check out the brains on Brad');
//} else {
//  alert('What part of yes or no is a problem for you?')
//}

//var questionTwo = prompt('Does Bernie stand a chance?');
//console.log('userResponse:' + questionTwo);

//if (questionTwo.toLowerCase() === 'y' || //questionTwo.toUpperCase() === 'YES') {
//  alert('I feel no Burn.');
//} else if (questionTwo.toLowerCase() === 'n' || //questionTwo.toUpperCase() === 'NO') {
//  alert('Correct. Hil-dog for the win');
//} else {
//  alert('Y or N');
//}

//var questionThree = prompt('Does my dog have four legs?');
//console.log('userResponse:' + questionThree);

//if (questionThree.toLowerCase() === 'n' || //questionThree.toUpperCase() === 'NO') {
//  alert('Incorrect, my dog does have four legs.');
//} else if (questionThree.toLowerCase() === 'y' || //questionThree.toLowerCase() === 'YES') {
//  alert('Yes, my dog has four legs.');
//} else {
//  alert('You\'ve failed');
//}

//4th question takes takes numeric input, and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer.
var counter = 0;
var mathQuestion = 0;
console.log('userResponse:' + mathQuestion);

do {
  var mathQuestion = parseInt(prompt('Guess my favorite number'));
  if (Number.isInteger(mathQuestion) === true && mathQuestion <= 2) {
    alert('Try a larger number.');
    counter++;
  } else if (Number.isInteger(mathQuestion) === true && mathQuestion >= 4) {
    alert('Try a smaller number.');
    counter++;
  } else if (Number.isInteger(mathQuestion) === true && mathQuestion === 3) {
    alert("Nice. You got it.");
    break;
  } else if (Number.isInteger(mathQuestion) === false) {
    alert('Try again, please enter a number')
    counter++;
  } else {
    alert('Please enter a number')
    counter++;
  }}
  while (counter <= 3);


  //tally the total number of questions answered correctly
  //var questionsCorrect = 0;
  //return 'You got ' + questionsCorrect + ' out of 5 questions correct,' + userName 'You can do even better next time.';
  //add a 5th question to my guessing game that accepts multiple possible correct answers that are stored in an array, for instance, //"Can you guess a state that I have lived in besides Washington?"

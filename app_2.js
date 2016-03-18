
// question-Object constructor:

function makeQuestion(ask, checkAnswerArray, correctResponse, wrongResponse) {
    this.ask: ask;                                      // asks the question
    this.checkAnswerArray = [checkAnswer];           // array of conditions
    this.correctResponse: correctResponse;
    this.wrongResponse = [wrongResponse];
    this.counterArray = [];                         // stores and counts all correct answers/inputs from user for output and counting tries
                                                    // (weather its needed or not!)
}


// Array Structure:

var questionObjects = [

    question_1 = new makeQuestion(
        "Do I have brown hair?",
        ["yes", "no"],
        'Yes, my hair is brown',
        'No, I DO have brown hair!',
        )
];






// 1:

var questionOne = prompt('Do I have brown hair?');
var counterquestionOne = 1;
var keepsAsking = true;

console.log('userResponse:' + questionOne);

while(keepsAsking = true && counterquestionOne < 4){
                                                                 // using a  while loop to repeat the question
                                                                 // until answer is either Y, YES, Yes, yes, N, NO, No, no
                                                                // too many if - else repeats -  use a for loop and an array

    if (questionOne.toLowerCase() === 'n' || questionOne.toUpperCase() === 'NO') {
        prompt(userName + ',' + 'No, I DO have brown hair! ');
        keepsAsking = true;
        counterquestionOne++;
  } else if (questionOne.toLowerCase() === 'y' || questionOne.toUpperCase() === 'YES') {
        alert('Yes, my hair is brown');
        keepsAsking = false;
  } else {
        prompt(userName + ',' + ' Do I have brown hair? ' + ' Please choose Y or N '); // add how many attempts remaining
        keepsAsking = true;
        counterquestionOne++;
    }
}

// 2:

var questionTwo = prompt('Do I have two feet?');
console.log('userResponse:' + questionTwo);
if (questionTwo.toLowerCase() === 'n' || questionTwo.toUpperCase() === 'NO') {
  alert('Incorrect. I do have two feet.');
} else if (questionTwo.toLowerCase() === 'n' || questionTwo.toUpperCase() === 'NO') {
  alert('Correct, I do have two feet.');
} else {
  alert('Try again. Your response should be Y or N');
}

// 3:

var questionThree = prompt('Does my dog have four legs?');
console.log('userResponse:' + questionThree);
if (questionThree.toLowerCase() === 'n' || questionThree.toUpperCase() === 'NO') {
  alert('Incorrect, my dog does have four legs.');
} else if (questionThree.toLowerCase() === 'y' || questionThree.toLowerCase() === 'YES') {
  alert('Yes, my dog has four legs.');
} else {
  alert('Try again. Your response should be Y or N');
}



// 4:

        //4th question takes takes numeric input, and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer.

var counterquestionMath = 1;
var mathQuestion = 0;

        //var keepsAskingMath = true;
        //console.log('userResponse:' + mathQuestion);
        //var i = 0;
        // do {
        //    i += 1;
        //    console.log(i);
        // } while (i < 5);

do {
  var mathQuestion = parseInt(prompt('Guess my favorite number'));
if (Number.isInteger(mathQuestion) === true && mathQuestion <=2 ){
  alert('Try a larger number');
  counterquestionMath++;
} else if (Number.isInteger(mathQuestion) === true && mathQuestion >= 4){
  alert('Try a smaller number');
  counterquestionMath++;
} else if (Number.isInteger(mathQuestion) === true && mathQuestion === 3){
  alert("Nice. You got it.");
  } else if (Number.isInteger(mathQuestion) === false){
  alert('Try again, please enter a number')
  counterquestionMath++;
} else {
  alert('Try again, please enter a number')
}

var userName = prompt('What is your name?');
console.log(' Hello, ' + userName + ' Would you like to hear a story? ');

var userAdjective = prompt('Name an adjective');
console.log(' The adjective you have choosen is ' + userAdjective);

var userNoun = prompt('Name a noun');
console.log(' You have choosen ' + userNoun);

var userVerb = prompt('Suggest a verb');
console.log(' The verb you have choosen is ' + userVerb);

var userPlace = prompt('Name a place');
console.log(' The place you have choosen is ' + userPlace);

var userReady = confirm(userName + ' Click OK to hear your story ');
console.log(userReady);

if (userReady === true) {
  alert(userName + ', your long lost cousin Jethro has passed. Although you did not know him, you are the only surviving relative. Secretly, Jethro was the ruler of ' + userPlace + ' and keeper of the ' + userAdjective + ' ' + userNoun + '. ' + ' Jethros final wish was for you to ' + userVerb + ' the ' + userNoun)
} else {
  alert(' Fine then, ' + userName + '. No story for you. Straight to bed. ')
};
alert(' Hey there ' + userName + ', I\'m going to ask you some questions about me. Please click "ok", then answer Y or N to the next question.');

var questionOne = prompt('Do I have brown hair?');
var counterquestionOne = 1;
var keepsAsking = true;
console.log('userResponse:' + questionOne);
while(keepsAsking = true && counterquestionOne < 4){
 // using a  while loop to repeat the question
 // until answer is either Y, YES, Yes, yes, N, NO, No, no
// too many if - else repeats -  use a for loop and an array
      if (questionOne.toLowerCase() === 'n' || questionOne.toUpperCase() === 'NO') {
    prompt(userName + ',' + ' Do I have brown hair? ');
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

var questionTwo = prompt('Do I have two feet?');
console.log('userResponse:' + questionTwo);
if (questionTwo.toLowerCase() === 'n' || questionTwo.toUpperCase() === 'NO') {
  alert('Incorrect. I do have two feet.');
} else if (questionTwo.toLowerCase() === 'n' || questionTwo.toUpperCase() === 'NO') {
  alert('Correct, I do have two feet.');
} else {
  alert('Try again. Your response should be Y or N');
}
var questionThree = prompt('Does my dog have four legs?');
console.log('userResponse:' + questionThree);
if (questionThree.toLowerCase() === 'n' || questionThree.toUpperCase() === 'NO') {
  alert('Incorrect, my dog does have four legs.');
} else if (questionThree.toLowerCase() === 'y' || questionThree.toLowerCase() === 'YES') {
  alert('Yes, my dog has four legs.');
} else {
  alert('Try again. Your response should be Y or N');
}
var questionFour = prompt('Is my car black?');
console.log('userResponse:' + questionFour);
if (questionFour.toLowerCase() === 'n' || questionFour.toUpperCase() === 'NO') {
  alert('Incorrect. My car is black.');
} else if (questionFour.toLowerCase() === 'y' || questionFour.toLowerCase() === 'YES') {
  alert('Yes, the Subaru is black.');
} else {
  alert('Try again. Your response should be Y or N');
}
var questionFive = prompt('Is the sky blue?');
console.log('userResponse:' + questionFive);
if (questionFive.toLowerCase() === 'n' || questionThree.toUpperCase() === 'NO') {
  alert('Incorrect, the sky is blue.');
} else if (questionThree.toLowerCase() === 'y' || questionThree.toLowerCase() === 'YES') {
  alert('Yes, the sky is blue.');
} else {
  alert('Try again. Your response should be Y or N');
}
var questionSix = prompt('Do I have two ears?');
console.log('userResponse:' + questionSix);
if (questionSix.toLowerCase() === 'n' || questionSix.toUpperCase() === 'NO') {
  alert('Incorrect, I do have two ears.');
} else if (questionThree.toLowerCase() === 'y' || questionThree.toLowerCase() === 'YES') {
  alert('Yes, I do have two ears.');
} else {
  alert('Try again. Your response should be Y or N');
}

var questionSix = prompt('Do I write this just for the day04 merge?');
console.log('userResponse:' + questionSix);
if (questionSix.toLowerCase() === 'n' || questionSix.toUpperCase() === 'NO') {
  alert('no.');
} else if (questionThree.toLowerCase() === 'y' || questionThree.toLowerCase() === 'YES') {
  alert('Yes');
} else {
  alert('Try again. Your response should be Y or N');
}


var counterquestionMath = 1;
var mathQuestion = 0;
var keepsAskingMath = true;
console.log('userResponse:' + mathQuestion);

while(counterquestionMath < 5 && keepsAskingMath === true){
  mathQuestion = parseInt(prompt('Guess my favorite number'));
if (Number.isInteger(mathQuestion) === true && mathQuestion < 0 ){
  alert('Try a larger number');
  counterquestionMath++;
} else if (Number.isInteger(mathQuestion) === true && mathQuestion > 4){
  alert('Try a smaller number');
  counterquestionMath++;
} else if (Number.isInteger(mathQuestion) === true && mathQuestion === 3){
  alert("Nice. You got it.");
  keepsAskingMath = false;
} else if (Number.isInteger(mathQuestion) === false){
  alert('Try again, please enter a number')
  counterquestionMath++;
} else {
  alert('Try again, please enter a number')
  counterquestionMath++;
}
};
//tally the total number of questions answered correctly
//var questionsCorrect = 0;
//return 'You got ' + questionsCorrect + ' out of 5 questions correct,' + userName 'You can do even better next time.';
//add a 5th question to my guessing game that accepts multiple possible correct answers that are stored in an array, for instance, //"Can you guess a state that I have lived in besides Washington?"

//

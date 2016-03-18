//alert(' Hello, I\'m going to ask you some questions about me. Please click "ok", then answer Y or N to the questions.');
//
// var questionOne = prompt('Do I have brown hair?');
// console.log('userResponse:' + questionOne);
//
//     if (questionOne.toLowerCase() === 'n' || questionOne.toUpperCase() === 'NO') {
//     alert(' Regular eye exams are key to good health ')
//   } else if (questionOne.toLowerCase() === 'y' || questionOne.toUpperCase() === 'YES') {
//     alert('Check out the brains on Brad');
//   } else {
//     alert('What part of yes or no is a problem for you?')
//   }
//
// var questionTwo = prompt('Does Bernie stand a chance?');
// console.log('userResponse:' + questionTwo);
//
// if (questionTwo.toLowerCase() === 'y' || questionTwo.toUpperCase() === 'YES') {
//   alert('I feel no Burn.');
//   } else if (questionTwo.toLowerCase() === 'n' || questionTwo.toUpperCase() === 'NO') {
//   alert('Correct. Hil-dog for the win');
// } else {
//   alert('Y or N');
// }
//
// var questionThree = prompt('Does my dog have four legs?');
// console.log('userResponse:' + questionThree);
//
//   if (questionThree.toLowerCase() === 'n' || questionThree.toUpperCase() === 'NO') {
//   alert('Incorrect, my dog does have four legs.');
//   } else if (questionThree.toLowerCase() === 'y' || questionThree.toLowerCase() === 'YES') {
//   alert('Yes, my dog has four legs.');
// } else {
//   alert('Try again. Your response should be Y or N');
// }

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
while (counterquestionMath < 5);

//5th question to my guessing game that accepts multiple possible correct answers that are stored in an array, for instance, "Can you guess a state that I have lived in besides Washington?"
// var questionFive = prompt('Can you guess which other states I have been to?')
//
// $(function(){
// // data about states
//   var statesTraveled = ['California','Washington','Oregon','Nevada', 'Virginia','New york', 'New Jersey']
// //checks each state and adds those in range to an array
//   var results = [];
//   statesTraveled.forEach(function(questionFive) {
//     if (questionFive = 'California' || 'Washington' || 'Oregon' || 'Nevada' || 'Virginia' || 'New York' || 'New Jersey'){
//       alert('I have been to California, Washington, Oregon, Nevada, Virginia, New York and New Jersey')
//     } else {
//       alert('Have not been there yet');}}};

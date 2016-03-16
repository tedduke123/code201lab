var userName = prompt('What is your name?');
console.log(' Hello, ' + userName + ' I hope you enjoy this totally not a Mad lib rip off');

var userAdjective = prompt('Name an adjective');
console.log(' The adjective you have choosen is ' + userAdjective);

var userNoun = prompt('Name a noun');
console.log(' You have choosen ' + userNoun);

var userVerb = prompt('Suggest a verb');
console.log(' The verb you have choosen is ' + userVerb);

var userPlace = prompt('Name a place');
console.log(' The place you have choosen is ' + userPlace);

var userReady = confirm(userName + ' Are you ready to hear your totally not a Mad lib rip off? ');
console.log(userReady);

if (userReady === true) {
  alert(userName + ', your long lost cousin Jethro has passed. Although you did not know him, you are the only surviving relative. Secretly, Jethro was the ruler of ' + userPlace + ' and keeper of the ' + userAdjective + ' ' + userNoun + ' Jethros final wish was for you to ' + userVerb + ' the ' + userNoun)
} else {
  alert(' Fine then, ' + userName + '. No story for you. Straight to bed. ')
};
alert(' Hey there ' + userName + ', I\'m going to ask you some questions about me. Please click "ok", then answer Y or N to the next question.');








var questionOne = prompt('Do I have brown hair?');
console.log('userResponse:' + questionOne);
if (questionOne.toLowerCase() === 'n' || questionOne.toUpperCase() === 'NO') {
  alert('Nope. My hair is brown.');
} else if (questionOne.toLowerCase() === 'y' || questionOne.toUpperCase() === 'YES') {
  alert('Yes, my hair is brown');
} else {
  alert('Try again. Your response should be Y or N.');
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
};

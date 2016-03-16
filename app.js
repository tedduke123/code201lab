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

if (userReady === true)
{
alert(userName + ', your long lost cousin Jethro has passed. Although you did not know him, you are the only surviving relative. Secretly, Jethro was the ruler of ' + userPlace ' and keeper of the ' + userAdjective + userNoun. + 'Jethros final wish was for you to ' + userVerb + ' the ' + userNoun )}
else {
  alert(' Fine then, ' + userName + '. No story for you. Straight to bed. ')
};

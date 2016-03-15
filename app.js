// 201
// 1-mon-lecture/code-demo js

var userName = prompt('What is your name?');
console.log('Meow Meow Meow ' + userName + '!!!!');

console.log('userGame before prompt: ', userGame);
var userGame = prompt('What is your game?');
console.log('userGame after prompt: ', userGame);
alert('So, ' + userName + ', I heard you like ' + userGame);

var loveHate = confirm(userName + ' do you love interweb?');
alert('Does, ' + userName + ' love interweb? ' + loveHate);

var userFood = prompt('What is your favorite food?');
console.log(userName + 'likes' + userFood);

var userColor = prompt('What is your favorite color?');
console.log(userName + 'likes' + userColor);
alert(userName + 'likes' + userColor);

var userLinux = confirm(userName + 'do you use Linux?');
console.log(userLinux + userName + 'like linux');

var userCar = prompt('What kind of car do you drive?');
console.log(userName + 'drives' + userCar);

var userDog = prompt('What type of dog? is your favorite?');
console.log(userName + 'prefers' + userDog);

var userShave = confirm(userName + 'did you shave today?');
console.log('Did' + userName + 'shave today' + userShave);
alert(userName + 'likes' + userFood + userColor + userDog + 'drives' + userCar + 'uses Linux' + userLinux + 'did shave' + userShave);

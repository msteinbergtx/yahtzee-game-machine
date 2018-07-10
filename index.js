// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function rollDice(){
var low = 1;
var high = 6;
var numRolls = 5;
var theRolls = [];
var i;

  for (i=0; i<numRolls; i++){
    theRolls.push(getRandomIntInclusive(low,high));
  }

  for (i=0; i<numRolls; i++){
    console.log(theRolls[i]);
  }
}

rollDice();
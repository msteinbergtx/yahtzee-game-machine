// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var theDice = [];
var numDice = 5;

function initDice(){
var i;

  for (i=0; i<numDice; i++){
    theDice.push(0);
  }
  
}

function rollDice(){
var low = 1;
var high = 6;

var i;

  for (i=0; i<numDice; i++){
    if (theDice[i]==0){
      theDice[i]=(getRandomIntInclusive(low,high));
  }
  }

}

function selectDice(){
  
var i;
  
  for (i=0; i<numDice; i++){
    if (i!=1) {
      theDice[i]=0;
    }
  }
  }

function printDice(){
  
var i;

  for (i=0; i<numDice; i++){
    console.log(theDice[i]);
  }

}

console.log("initializing dice");
initDice();
printDice();

console.log("rolling first pass...");
rollDice();
printDice();

console.log("selecting...");
selectDice();
printDice();

console.log("rolling second pass...");
rollDice();
printDice();

console.log("selecting...");
selectDice();
printDice();

console.log("rolling third pass...");
rollDice();
printDice();

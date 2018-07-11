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

function isYahtzee(){
  return !!theDice.reduce(function(a, b){ return (a === b) ? a : NaN; });
}

function playTurn(){
  console.log("initializing dice");
  initDice();
  printDice();
  
  console.log("rolling first pass...");
  rollDice();
  printDice();
  
  // theDice[0] = 5;
  // theDice[1] = 5;
  // theDice[2] = 5;
  // theDice[3] = 5;
  // theDice[4] = 5;
  
  if (isYahtzee()) {
    console.log("Yahtzee!");
  } else {
      console.log("selecting...");
      selectDice();
      printDice();
      
      console.log("rolling second pass...");
      rollDice();
      printDice();
      
      if (isYahtzee()) {
        console.log("Yahtzee!");
      } else {
        console.log("selecting...");
        selectDice();
        printDice();
        
        if (isYahtzee()) {
          console.log("Yahtzee!");
        } else {
          console.log("rolling third pass...");
          rollDice();
          printDice();
        }
      }
  }
}

playTurn();
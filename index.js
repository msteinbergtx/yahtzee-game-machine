// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('hello world!');
low = 1;
high = 6;
thisRoll = getRandomIntInclusive(1,6);
console.log(thisRoll);
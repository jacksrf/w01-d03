// number between 5-20
var x = parseInt(process.argv[2]);

y = Math.floor(Math.random()*(5 - 1)  + 1) + 1
if (x === y) {
  console.log("Success!");
}
else {
  console.log("Sorry, we are looking for " + y);
}
